import { ThemeProvider } from '@meli/ui';
import MeliNavbar from './components/MeliNavbar';

export default function Root() {
    return (
        <ThemeProvider>
            <header>
                <MeliNavbar />
            </header>
        </ThemeProvider>
    );
}
