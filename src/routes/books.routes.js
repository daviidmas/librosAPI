import { Router } from 'express'
import { BooksController } from '../controllers/books.js'

export const booksRouter = Router()

const booksController = new BooksController()

booksRouter.get('/', booksController.getAll)
booksRouter.get('/:id', booksController.getById)

booksRouter.post('/', booksController.insertInto)
booksRouter.patch('/', booksController.modify)

booksRouter.delete('/', booksController.delete)
