import { config } from '../../../config';
import { Context } from '../../../config/types';

import * as itemsService from '../../../services/items/items.service';

import { Author, ProductItem } from '../dto';

export type SearchItemsInput = {
    search: string;
};

export type SearchItemsOutput = {
    author: Author;
    categories: string[];
    items: Pick<ProductItem, 'title' | 'condition' | 'free_shipping' | 'id' | 'picture' | 'price'>[];
};

export async function searchItems(ctx: Context<SearchItemsInput>): Promise<SearchItemsOutput> {
    const response = await itemsService.searchItems(ctx.payload.search);

    console.log(response.config);

    return {
        author: config.author,
        categories: Array.from(new Set(response.data.results.map((r) => r.category_id))),
        items: response.data.results.map((r) => ({
            id: r.id,
            title: r.title,
            condition: r.condition as ProductItem['condition'],
            free_shipping: r.shipping.free_shipping,
            picture: r.thumbnail,
            price: {
                amount: r.sale_price.amount,
                currency: r.sale_price.currency_id
            }
        }))
    };
}
