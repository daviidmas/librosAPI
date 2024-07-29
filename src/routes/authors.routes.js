import { Router } from 'express'
import { AuthorController } from '../controllers/authors.js'

export const authorRouter = Router()

const authorController = new AuthorController()

authorRouter.get('/', authorController.getAll)
authorRouter.get('/:id', authorController.getbyId)

authorRouter.post('/', authorController.insertInto)
authorRouter.patch('/:id', authorController.modify)

authorRouter.delete('/:id', authorController.delete)
