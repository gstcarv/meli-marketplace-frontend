import { config } from '../../../config';
import { Context } from '../../../config/types';
import { sanitizeDescription } from '../helpers/description.helper';

import * as meliService from '../../../services/meli/meli.service';

import { Author, ProductItem } from '../dto';
import { MeliItemResponse } from '../../../services/meli/types/items.types';

export type GetItemByIDInput = {
    id: string;
};

export type GetItemByIDOutput = {
    author: Author;
    categories: string[];
    item: ProductItem;
};

export async function getItemById(ctx: Context<GetItemByIDInput>): Promise<GetItemByIDOutput> {
    const [itemResponse, descriptionResponse] = await Promise.all([
        meliService.getItemById(ctx.payload.id),
        meliService.getItemDescription(ctx.payload.id)
    ]);

    const categories = await resolveCategories(itemResponse.data);

    return {
        author: config.author,
        categories,
        item: {
            id: itemResponse.data.id,
            title: itemResponse.data.title,
            condition: itemResponse.data.condition as ProductItem['condition'],
            description: sanitizeDescription(descriptionResponse.data.plain_text) as string,
            free_shipping: itemResponse.data.shipping.free_shipping,
            picture: itemResponse.data.pictures[0]?.url,
            price: {
                amount: itemResponse.data.price,
                currency: itemResponse.data.currency_id
            },
            sold_quantity: itemResponse.data.sold_quantity
        }
    };
}

async function resolveCategories(response: MeliItemResponse) {
    try {
        const categoryResponse = await meliService.getCategoryById(response.category_id);

        return categoryResponse.data.path_from_root.map((c) => c.name);
    } catch (err) {
        console.error('error while trying to fetch category from meli');

        return [];
    }
}
