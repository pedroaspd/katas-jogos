import express from 'express';
import GamesController from '../controllers/games.controller';

const router = express.Router();
const gamesController = new GamesController();

//router.get('/', GamesController.getAllGames)

router.get('/id/:id', gamesController.getGameById);

//router.get('/name/:name', GamesController.getGameByName)

export = router;