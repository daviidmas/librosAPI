import { db } from '../database/connection.database.js'

export class BooksGenresModel {
  static async getAll () {
    const bookGenre = (await db.query('Select * from book_genre')).rows

    return bookGenre
  }

  static async getGenresByBook (bookId) {
    const genres = (await db.query('select * from book_genre where book_id = $1', [bookId])).rows

    return genres
  }

  static async getBooksbyGenre (genreId) {
    const books = (await db.query('select * from book_genre where genre_id = $1', [genreId])).rows

    return books
  }

  static async addBookGenre (bookId, genreId) {
    const bookGenre = (await db.query('Insert into book_genre(book_id, genre_id) values($1, $2)', [bookId, genreId])).rows

    return bookGenre
  }

  static async delete (bookId, genreId) {
    const bookGenre = (await db.query('Delete book_genre where book_id = $1 and genre_id = $2', [bookId, genreId])).rows

    return bookGenre
  }
}
