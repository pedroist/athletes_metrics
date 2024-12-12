import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { PrismaClient } from '@prisma/client'
import 'dotenv/config'
import { athleteRoutes } from './routes/athlete.routes'
import { errorHandler } from './middlewares/error.middleware'

const app = new Hono()
export const prisma = new PrismaClient()

// Global middleware
app.use('*', logger())
app.use('*', cors())
app.use('*', errorHandler)

// Routes
app.route('/api/athletes', athleteRoutes)

// Health check
app.get('/', (c) => {
  return c.json({ status: 'ok', message: 'Server is running' })
})

// Start server
const port = process.env.PORT || 3001
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port: Number(port)
})

// Graceful shutdown
process.on('SIGTERM', async () => {
  await prisma.$disconnect()
  process.exit(0)
}) 