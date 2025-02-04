import { ThemeProvider } from '@meli/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchResults from '.';

const mockQueryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, cacheTime: 0 } }
});

describe('<SearchResults />', () => {
    it('should show loading skeletons when loading', async () => {
        render(
            <QueryClientProvider client={mockQueryClient}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/items?search=empty']}>
                        <SearchResults />
                    </MemoryRouter>
                </ThemeProvider>
            </QueryClientProvider>
        );

        expect(screen.getAllByTestId(/skeleton-loading/)).toBeDefined();
    });

    it('should show empty page if no items found', async () => {
        render(
            <QueryClientProvider client={mockQueryClient}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/items?search=empty']}>
                        <SearchResults />
                    </MemoryRouter>
                </ThemeProvider>
            </QueryClientProvider>
        );

        expect(await screen.findByText(/Oops! Item não encontrado./)).toBeInTheDocument();
        expect(await screen.findByText(/não conseguimos encontrar/)).toBeInTheDocument();
    });

    it('should show error page if any error ocurred when trying to find item', async () => {
        render(
            <QueryClientProvider client={mockQueryClient}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/items?search=error']}>
                        <SearchResults />
                    </MemoryRouter>
                </ThemeProvider>
            </QueryClientProvider>
        );

        expect(await screen.findByText(/Erro! Algo deu errado./)).toBeInTheDocument();
        expect(await screen.findByText(/enfrentando dificuldades técnicas/)).toBeInTheDocument();
    });

    it('should show found items and breadcrumb when search success request', async () => {
        render(
            <QueryClientProvider client={mockQueryClient}>
                <ThemeProvider>
                    <MemoryRouter initialEntries={['/items?search=success']}>
                        <SearchResults />
                    </MemoryRouter>
                </ThemeProvider>
            </QueryClientProvider>
        );

        expect(await screen.findByText(/Cellphones/)).toBeInTheDocument();
        expect(await screen.findByText(/iPhone/)).toBeInTheDocument();

        expect(await screen.findByText(/mock-title-1/)).toBeInTheDocument();
        expect(await screen.findByText(/mock-title-2/)).toBeInTheDocument();
    });
});
