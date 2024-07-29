import express, { json } from 'express'
import { booksRouter } from './routes/books.routes.js'
import { authorRouter } from './routes/authors.routes.js'
import { genreRouter } from './routes/genres.routes.js'
import cors from 'cors'

const app = express()

app.use(json())
app.disable('x-powered-by')
app.use(cors())

app.use('/books', booksRouter)

app.use('/authors', authorRouter)

app.use('/genres', genreRouter)

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('*', (req, res) => {
  res.send('Page Not Found', 404)
})

app.listen(1234, () => {
  console.log('Server listening in the port 1234')
})
