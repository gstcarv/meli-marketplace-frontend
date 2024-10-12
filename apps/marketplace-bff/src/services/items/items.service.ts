import axios from 'axios';
import { config } from '../../config';
import { MeliItemDescriptionResponse, MeliItemResponse, MeliSiteItemsResponse } from './items.types';

const meliApi = axios.create({
    baseURL: config.services.meli.url
});

export function searchItems(q: string | undefined | null) {
    return meliApi.get<MeliSiteItemsResponse>('/sites/MLA/search', {
        params: { q }
    });
}

export function getItemById(id: string) {
    return meliApi.get<MeliItemResponse>(`/items/${id}`);
}

export function getItemDescription(id: string) {
    return meliApi.get<MeliItemDescriptionResponse>(`/items/${id}/description`);
}
