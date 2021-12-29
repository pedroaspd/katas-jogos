import {Request, Response} from 'express'

class GamesController {

  constructor(){

  }

  //confirmar o uso do static
  static async getGameById(req: Request, res: Response){
    let id: string = req.params.id;
    let game = null;

    return res.status(200).json(game);
  };

}

export default GamesController;