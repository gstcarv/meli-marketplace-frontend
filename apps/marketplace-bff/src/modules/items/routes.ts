import express, { Router } from 'express';

import { getItemById } from './procedures/get-item-by-id.procedure';
import { searchItems, SearchItemsInput } from './procedures/search-items.procedure';

export const itemsRouter: Router = express.Router();

itemsRouter.get('/items', async (req, res, next) => {
    try {
        const result = await searchItems({ payload: req.query as SearchItemsInput });

        return res.json(result).status(200);
    } catch (err) {
        return next(err);
    }
});

itemsRouter.get('/items/:id', async (req, res, next) => {
    try {
        const result = await getItemById({
            payload: { id: String(req.params.id) }
        });

        return res.json(result).status(200);
    } catch (err) {
        return next(err);
    }
});
