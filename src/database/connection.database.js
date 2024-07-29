import pg from 'pg'
import { config } from 'dotenv'

config()

const { Pool } = pg

const connectionString = process.env.DATABASE_URL

export const db = new Pool({
  allowExitOnIdle: true,
  connectionString,
  ssl: true
})
