import express from 'express';
import route from './routes';
import './database';

class App {
    constructor() {
        this.server = express();

        this.middleware();
        this.routes();
    }

    middleware() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(route);
    }
}

export default new App().server;
