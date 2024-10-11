import { ThemeProvider } from '@meli/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchResults } from './routes/SearchResults';

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
                <BrowserRouter basename='/items'>
                    <Routes>
                        <Route path='/' Component={SearchResults} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
