import { ThemeProvider } from '@meli/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ProductDetails } from '.';

const mockQueryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, cacheTime: 0 } }
});

describe('<ProductDetails />', () => {
    function renderWithProviders(path: string, element: ReactElement) {
        return render(
            <QueryClientProvider client={mockQueryClient}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={[path]}>
                        <Routes>
                            <Route path='/items/:slug' Component={() => element} />
                        </Routes>
                    </MemoryRouter>
                </ThemeProvider>
            </QueryClientProvider>
        );
    }

    it('should show loading skeletons when loading', async () => {
        renderWithProviders('/items/ML-ID-SUCCESS', <ProductDetails />);

        expect(screen.getAllByTestId(/skeleton-loading/)).toBeDefined();
    });

    it('should show error page if any error ocurred when trying to find item', async () => {
        renderWithProviders('/items/ML-ID-ERROR', <ProductDetails />);

        expect(await screen.findByText(/Erro! Algo deu errado./)).toBeInTheDocument();
        expect(await screen.findByText(/enfrentando dificuldades técnicas/)).toBeInTheDocument();
    });

    it('should show product details page with success to get product details', async () => {
        renderWithProviders('/items/ML-ID-SUCCESS', <ProductDetails />);

        expect(await screen.findByText(/Cellphones/)).toBeInTheDocument();
        expect(await screen.findByText(/iPhone/)).toBeInTheDocument();

        expect(await screen.findByText(/Novo | 10 vendidos/)).toBeInTheDocument();
        expect(await screen.findByText(/mock-product-description/)).toBeInTheDocument();
        expect(await screen.findByText(/mock-title-1/)).toBeInTheDocument();
    });
});
