import 'dotenv/config';

import express from 'express';
import { config } from './config';
import { errorHandler } from './middlewares/error-handler.middleware';
import { itemsRouter } from './modules/items/routes';

const server = express();

server.use(itemsRouter);

server.use(errorHandler);

server.listen(config.port, () => {
    console.log(`🚀 app running on ${config.port}`);
});
