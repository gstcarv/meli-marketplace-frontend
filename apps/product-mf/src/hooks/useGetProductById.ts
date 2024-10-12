import { GetItemByIDInput, GetItemByIDOutput } from '@marketplace/bff';
import { useQuery } from '@tanstack/react-query';
import { http } from '../config/http/client';

export function useGetProductById(params: GetItemByIDInput) {
    return useQuery({
        queryKey: ['get-product-by-id', params],
        queryFn: async () => (await http.get<GetItemByIDOutput>(`/items/${params.id}`)).data,
        enabled: !!params?.id
    });
}
