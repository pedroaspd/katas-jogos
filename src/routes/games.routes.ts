import * as express from 'express';
import GamesController from '@src/controllers/games.controller';

const router = express.Router();

//router.get('/', GamesController.getAllGames)

router.get('/id/:id', GamesController.getGameById)

//router.get('/name/:name', GamesController.getGameByName)

export = router;
