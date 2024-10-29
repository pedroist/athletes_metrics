import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'

const athleteRoutes = new Hono()

// Basic test route
athleteRoutes.get('/', (c) => {
  return c.json({ message: 'Athletes API is working' })
})

export { athleteRoutes }