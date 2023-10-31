import Router from 'express-promise-router'
import { Request, Response } from 'express'
import { query } from '../db/index'

const router = new (Router as any)()

router.get('/', async (req: Request, res: Response) => {
  const previousMax = req.query.previousMax?.toString() || '0'
  const response = await query('SELECT * FROM STATION WHERE id > $1 ORDER BY id LIMIT 20;', [previousMax])
  res.send(response.rows)
})

export default router
