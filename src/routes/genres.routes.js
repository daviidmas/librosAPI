import { Router } from 'express'
import { GenreController } from '../controllers/genres.js'

export const genreRouter = Router()

const genreController = new GenreController()

genreRouter.get('/', genreController.getAll)
genreRouter.get('/:id', genreController.getById)

genreRouter.post('/', genreController.insertInto)
genreRouter.patch('/:id', genreController.modify)

genreRouter.delete('/:id', genreController.delete)
