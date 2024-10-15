import 'dotenv/config';

import express, { Express } from 'express';
import cors from 'cors';
import { config } from './config';
import { errorHandler } from './middlewares/error-handler.middleware';
import { itemsRouter } from './modules/items/routes';

const server: Express = express();

server.use(cors());

server.get('/', (req, res) => res.send('ok'));

// server.use(itemsRouter);

server.use(errorHandler);

server.listen(config.port, () => {
    console.log(`🚀 app running on ${config.port}`);
});

export default server;
