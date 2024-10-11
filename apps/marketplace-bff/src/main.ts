import 'dotenv/config';

import express from 'express';
import { config } from './config';

import { itemsRouter } from './modules/items/routes';

const server = express();

server.use(itemsRouter);

server.listen(config.port, () => {
    console.log(`🚀 app running on ${config.port}`);
});
