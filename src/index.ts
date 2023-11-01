import cors from 'cors'
import express, { Application } from 'express'
import dotenv from 'dotenv'
import mountRoutes from './routes/index'

dotenv.config()

const app: Application = express()
app.use(cors())
mountRoutes(app)

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`)
})
