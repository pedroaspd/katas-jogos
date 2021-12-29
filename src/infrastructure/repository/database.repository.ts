import database from '../../../database/database.json'

export default class DatabaseRepository {
  public static getAllGames () {
    console.log(database);
    return database;
  }
};