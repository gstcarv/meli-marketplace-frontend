import { MeliSiteItemsResponse } from '../../../services/meli/types/items.types';
import { config } from '../../../config';
import { Context } from '../../../config/types';

import * as meliService from '../../../services/meli/meli.service';

import { Author, ProductItem } from '../dto';
import { getMostFrequentCategory } from '../helpers/category.helper';

export type SearchItemsInput = {
    q?: string | null;
};

export type SearchItemsOutput = {
    author: Author;
    categories: string[];
    items: Pick<ProductItem, 'title' | 'condition' | 'free_shipping' | 'id' | 'picture' | 'price'>[];
};

export async function searchItems(ctx: Context<SearchItemsInput>): Promise<SearchItemsOutput> {
    const response = await meliService.searchItems(ctx.payload.q);

    const categories = await resolveCategories(response.data);

    return {
        author: config.author,
        categories,
        items: response.data.results.map((r) => ({
            id: r.id,
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

async function resolveCategories(response: MeliSiteItemsResponse) {
    const mostFrequestCategoryId = getMostFrequentCategory(response.results.map((r) => r.category_id));

    if (!mostFrequestCategoryId) return [];

    try {
        const categoryResponse = await meliService.getCategoryById(mostFrequestCategoryId);

        return categoryResponse.data.path_from_root.map((c) => c.name);
    } catch (err) {
        console.error('error while trying to fetch categories from meli');

        return [];
    }
}
