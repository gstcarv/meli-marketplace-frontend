import express from 'express';

import { searchItems, SearchItemsInput } from './procedures/search-items.procedure';

export const itemsRouter = express.Router();

itemsRouter.get('/items', async (req, res) => {
    const result = await searchItems({ payload: req.query as SearchItemsInput });

    return res.json(result).status(200);
});
