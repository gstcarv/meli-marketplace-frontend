import axios from 'axios';
import { config } from '../../config';
import { MeliSiteItemsResponse } from './items.types';

const meliApi = axios.create({
    baseURL: config.services.meli.url
});

export function searchItems(q: string) {
    return meliApi.get<MeliSiteItemsResponse>('/sites/MLA/search', {
        params: { q }
    });
}
