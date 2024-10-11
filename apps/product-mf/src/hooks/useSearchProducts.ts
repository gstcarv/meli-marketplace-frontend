import { SearchItemsInput, SearchItemsOutput } from '@marketplace/bff';
import { useQuery } from '@tanstack/react-query';
import { http } from '../config/http/client';

export function useSearchProducts(params: SearchItemsInput) {
    return useQuery({
        queryKey: ['search-products', params],
        queryFn: async () => (await http.get<SearchItemsOutput>('/items', { params })).data,
        enabled: !!params?.q
    });
}
