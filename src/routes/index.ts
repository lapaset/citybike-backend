import { Application } from 'express'
import station from './station'

const mountRoutes = (app: Application) => {
  app.use('/api/station', station)
}

export default mountRoutes
