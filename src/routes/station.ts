import Router from 'express-promise-router'
import { Request, Response } from 'express'
import { query } from '../db/index'

const router = new (Router as any)()

router.get('/', async (req: Request, res: Response) => {
  const previousMax = req.query.previousMax?.toString() || '0'
  const response = await query('SELECT * FROM STATION WHERE id > $1 ORDER BY id LIMIT 30;', [previousMax])
  res.send(response.rows)
})

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  const basicInfo = await query('SELECT * FROM STATION WHERE id = $1', [id])
  const stats = await query(
    'SELECT COUNT(*) as start_count, avg(duration) as avg_duration, avg(distance) as avg_distance, (\
      SELECT COUNT(*) FROM JOURNEY WHERE return_station_id = $1\
    ) AS end_count\
     FROM JOURNEY WHERE departure_station_id = $1\
    ;',
    [id]
  )

  res.send({ ...basicInfo.rows[0], ...stats.rows[0] })
})

export default router
