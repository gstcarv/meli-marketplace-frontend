import express from 'express';

import { searchItems, SearchItemsInput } from './procedures/search-items.procedure';
import { getItemById } from './procedures/get-item-by-id.procedure';

export const itemsRouter = express.Router();

itemsRouter.get('/items', async (req, res) => {
    const result = await searchItems({ payload: req.query as SearchItemsInput });

    return res.json(result).status(200);
});

itemsRouter.get('/items/:id', async (req, res) => {
    const result = await getItemById({
        payload: { id: String(req.params.id) }
    });

    return res.json(result).status(200);
});
