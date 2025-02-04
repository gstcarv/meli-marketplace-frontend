import { ThemeProvider } from '@meli/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const SearchResults = lazy(() => import('./routes/SearchResults'));
const SearchLanding = lazy(() => import('./routes/SearchLanding'));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 3000,
            refetchOnWindowFocus: false
        }
    }
});

export default function Root() {
    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter basename='/'>
                    <Routes>
                        <Route
                            path='/items'
                            element={
                                <Suspense fallback={<div />}>
                                    <SearchResults />
                                </Suspense>
                            }
                        />

                        <Route
                            path='/'
                            element={
                                <Suspense fallback={<div />}>
                                    <SearchLanding />
                                </Suspense>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
