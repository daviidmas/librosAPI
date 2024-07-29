import { BooksModel } from '../models/books.js'

export class BooksController {
  getAll = async (req, res) => {
    const books = await BooksModel.getAll()
    res.json(books)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const book = await BooksModel.getById(id)
    res.json(book)
  }

  insertInto = async (req, res) => {
    const { name, description, author } = req.body
    const book = await BooksModel.insertInto(name, description, author)
    res.json(book)
  }

  modify = async (req, res) => {
    const { id } = req.params
    const { name, description, author } = req.body
    const book = await BooksModel.modify(name, description, author, id)
    res.json(book)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const book = await BooksModel.delete(id)
    res.json(book)
  }
}
