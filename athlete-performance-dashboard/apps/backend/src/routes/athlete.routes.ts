import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { prisma } from '../index'
import { AthleteRepository } from '../repositories/athlete.repository'
import { AthleteService } from '../services/athlete.service'
import { AthleteController } from '../controllers/athlete.controller'
import { createAthleteSchema, createMetricSchema, updateAthleteSchema } from '../validators/athlete.validator'

const athleteRoutes = new Hono()

// Initialize dependencies - these are not static classes, they need an instance before being injected
const repository = new AthleteRepository(prisma)
const service = new AthleteService(repository)
const controller = new AthleteController(service)

// Routes
athleteRoutes.get('/', controller.getAllAthletes)

athleteRoutes.get('/:id', controller.getAthleteById)

athleteRoutes.post('/', 
  zValidator('json', createAthleteSchema),
  controller.createAthlete
)

athleteRoutes.put('/:id',
  zValidator('json', updateAthleteSchema),
  controller.updateAthlete
)

athleteRoutes.delete('/:id', controller.deleteAthlete)

athleteRoutes.post('/:id/metrics',
  zValidator('json', createMetricSchema),
  controller.createMetric
)

athleteRoutes.get('/:id/metrics', controller.getAthleteMetrics)

export { athleteRoutes } 