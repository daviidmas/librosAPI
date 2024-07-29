import { db } from '../database/connection.database.js'

export class AuthorModel {
  static async getAll () {
    const authors = (await db.query('Select * from author')).rows

    return authors
  }

  static async getById (id) {
    const author = (await db.query('Select * from author where id = $1', [id])).rows

    return author
  }

  static async insertInto (name, lastName) {
    const author = (await db.query('Insert into author(name, last_name) values($1, $2)', [name, lastName])).rows

    return author
  }

  static async modify (name, lastName, id) {
    const author = (await db.query('Update author set name = $1, last_name = $2 where id = $3', [name, lastName, id])).rows

    return author
  }

  static async delete (id) {
    const author = (await db.query('Delete from author where id = $1', [id])).rows

    return author
  }
}
