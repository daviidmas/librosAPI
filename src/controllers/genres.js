import { GenreModel } from '../models/genres.js'

export class GenreController {
  getAll = async (req, res) => {
    const genres = await GenreModel.getAll()
    res.json(genres)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const genre = await GenreModel.getById(id)
    res.json(genre)
  }

  insertInto = async (req, res) => {
    const { name, description } = req.body
    const genre = await GenreModel.insertInto(name, description)
    res.json(genre)
  }

  modify = async (req, res) => {
    const { id } = req.params
    const { name, description } = req.body
    const genre = await GenreModel.modify(name, description, id)
    res.json(genre)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const genre = await GenreModel.delete(id)
    res.json(genre)
  }
}
