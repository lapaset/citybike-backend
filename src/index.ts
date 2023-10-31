import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port = process.env.PORT || 3001

app.get('/', (req: Request, res: Response) => {
  res.send('hello citybike')
})

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`)
})
