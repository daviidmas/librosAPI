import { AuthorModel } from '../models/authors.js'

export class AuthorController {
  getAll = async (req, res) => {
    const authors = await AuthorModel.getAll()
    res.json(authors)
  }

  getbyId = async (req, res) => {
    const { id } = req.params
    const author = await AuthorModel.getById(id)
    res.json(author)
  }

  insertInto = async (req, res) => {
    const { name, lastName } = req.body
    const author = await AuthorModel.insertInto(name, lastName)
    res.json(author)
  }

  modify = async (req, res) => {
    const { id } = req.params
    const { name, lastName } = req.body
    const author = await AuthorModel.modify(name, lastName, id)
    res.json(author)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const author = await AuthorModel.delete(id)
    res.json(author)
  }
}
