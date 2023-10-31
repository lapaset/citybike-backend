import express, { Application } from 'express'
import dotenv from 'dotenv'
import mountRoutes from './routes/index'

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 3001

mountRoutes(app)

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`)
})
