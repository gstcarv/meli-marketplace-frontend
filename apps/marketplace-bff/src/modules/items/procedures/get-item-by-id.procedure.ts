import { sanitizeDescription } from '../../../helpers/description.helper';
import { config } from '../../../config';
import { Context } from '../../../config/types';

import * as itemsService from '../../../services/items/items.service';

import { Author, ProductItem } from '../dto';

export type GetItemByIDInput = {
    id: string;
};

export type GetItemByIDOutput = {
    author: Author;
    item: ProductItem;
};

export async function getItemById(ctx: Context<GetItemByIDInput>): Promise<GetItemByIDOutput> {
    const [itemResponse, descriptionResponse] = await Promise.all([
        itemsService.getItemById(ctx.payload.id),
        itemsService.getItemDescription(ctx.payload.id)
    ]);

    return {
        author: config.author,
        item: {
            id: itemResponse.data.id,
            title: itemResponse.data.title,
            condition: itemResponse.data.condition as ProductItem['condition'],
            description: sanitizeDescription(descriptionResponse.data.plain_text),
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
