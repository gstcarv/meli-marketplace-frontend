import { ThemeProvider } from '@meli/ui';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchResults } from './routes/SearchResults';

export default function Root() {
    return (
        <ThemeProvider>
            <BrowserRouter basename='/items'>
                <Routes>
                    <Route path='/' Component={SearchResults} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
