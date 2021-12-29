import {Request, Response} from 'express'
import DatabaseRepository from '../infrastructure/repository/database.repository'

class GamesController {

  constructor(){

  }

  async getGameById(req: Request, res: Response){
    let id: string = req.params.id;
    let game = null;
    DatabaseRepository.getAllGames();

    return;
    //return res.status(200).json(game);
  };

}

export default GamesController;