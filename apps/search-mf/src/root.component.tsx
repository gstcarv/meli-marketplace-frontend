import { ThemeProvider } from '@meli/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchResults } from './routes/SearchResults';
import { SearchLanding } from './routes/SearchLanding';

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
                        <Route path='/items' Component={SearchResults} />

                        <Route path='/' Component={SearchLanding} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
