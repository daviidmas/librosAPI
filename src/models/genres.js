import { db } from '../database/connection.database.js'

export class GenreModel {
  static async getAll () {
    const genres = (await db.query('Select * from genre')).rows

    return genres
  }

  static async getById (id) {
    const genre = (await db.query('Select * from genre where id = $1', [id])).rows

    return genre
  }

  static async insertInto (name, description) {
    const genre = (await db.query('Insert into genre (name, description) values($1, $2)', [name, description])).rows

    return genre
  }

  static async modify (name, description, id) {
    const genre = (await db.query('Update genre set name = $1, description = $2 where id = $3', [name, description, id])).rows

    return genre
  }

  static async delete (id) {
    const genre = (await db.query('Delete genre where id = $1'[id])).rows

    return genre
  }
}
