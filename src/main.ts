import express from 'express';

export default class Server
{
    public app: express.Application;

    constructor(){
        this.app = express();
    }

    listen(){
        this.app.listen(8080, () => console.log('Running at 8080'));
    }
}

const server = new Server();
server.listen();