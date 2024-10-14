import { MeliSiteItemsResponse } from '../../../services/meli/types/items.types';
import { config } from '../../../config';
import { Context } from '../../../config/types';

import * as meliService from '../../../services/meli/meli.service';

import { Author, ProductItem } from '../dto';
import { getMostFrequentCategory } from '../helpers/category.helper';
import { createItemSlug } from '../helpers/slug.helper';

export type SearchItemsInput = {
    q?: string | null;
};

/**
 * max quantity predefined by the exercice
 */
const MAX_ITEMS_QUANTITY = 4;

export type SearchItemsOutput = {
    author: Author;
    categories: string[];
    items: Pick<ProductItem, 'title' | 'condition' | 'free_shipping' | 'id' | 'picture' | 'price'>[];
};

export async function searchItems(ctx: Context<SearchItemsInput>): Promise<SearchItemsOutput> {
    const items = await fetchItems(ctx.payload);

    const categories = await resolveCategories(items);

    return {
        author: config.author,
        categories,
        items: items.map((r) => ({
            id: createItemSlug(r.id, r.title),
            title: r.title,
            condition: r.condition as ProductItem['condition'],
            free_shipping: r.shipping.free_shipping,
            picture: r.thumbnail,
            price: {
                amount: r.price,
                currency: r.currency_id
            }
        }))
    };
}

export async function fetchItems(input: SearchItemsInput) {
    const response = await meliService.searchItems(input.q);

    return response.data.results.slice(0, MAX_ITEMS_QUANTITY);
}

async function resolveCategories(response: MeliSiteItemsResponse['results']) {
    const mostFrequestCategoryId = getMostFrequentCategory(response.map((r) => r.category_id));

    if (!mostFrequestCategoryId) return [];

    try {
        const categoryResponse = await meliService.getCategoryById(mostFrequestCategoryId);

        return categoryResponse.data.path_from_root.map((c) => c.name);
    } catch (err) {
        console.error('error while trying to fetch categories from meli');

        return [];
    }
}
