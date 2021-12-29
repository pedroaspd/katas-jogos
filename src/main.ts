import express from 'express';
import router from './routes/games.routes'

export default class Server
{
    public app: express.Application;

    constructor(){
        this.app = express();
        this.app.use('/', router);
    }

    listen(){
        this.app.listen(8080, () => console.log('Running at 8080'));
    }
}

const server = new Server();
server.listen();