import pg from 'pg'

const { Pool } = pg

const connectionString = 'postgresql://postgres:admin@localhost:5432/booksdb'

export const db = new Pool({
  allowExitOnIdle: true,
  connectionString
})
