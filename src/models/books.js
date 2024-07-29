import { db } from '../database/connection.database.js'

export class BooksModel {
  static async getAll () {
    const books = (await db.query('Select * from book')).rows

    return books
  }

  static async getById (id) {
    const book = (await db.query('Select * from book where id = $1', [id])).rows

    return book
  }

  static async insertInto (name, description, author) {
    const book = (await db.query('Insert into book(name, description, author_id) values ($1, $2, $3)', [name, description, author])).rows

    return book
  }

  static async modify (name, description, author) {
    const book = (await db.query('Update book set name = $1, description = $2, author = $3', [name, description, author])).rows

    return book
  }

  static async delete (id) {
    const book = (await db.query('Delete from book where id = $1', [id])).rows

    return book
  }
}
