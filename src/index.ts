import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import { query } from './db/index'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 3001

app.get('/', async (req: Request, res: Response) => {
  const all = await query('SELECT * FROM STATION')
  res.send(all.rows)
})

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`)
})
