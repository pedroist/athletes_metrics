import { Context } from 'hono'
import { AthleteService } from '../services/athlete.service'
import { AppError } from '../middlewares/error.middleware'
import { MetricType } from '@prisma/client'

export class AthleteController {
  constructor(private service: AthleteService) {}

  createAthlete = async (c: Context) => {
    const data = await c.req.json()
    const athlete = await this.service.createAthlete(data)
    return c.json({ success: true, data: athlete }, 201)
  }

  getAllAthletes = async (c: Context) => {
    const athletes = await this.service.getAllAthletes()
    return c.json({ success: true, data: athletes })
  }

  getAthleteById = async (c: Context) => {
    const id = c.req.param('id')
    const athlete = await this.service.getAthleteById(id)
    
    if (!athlete) {
      throw new AppError(404, 'Athlete not found')
    }
    
    return c.json({ success: true, data: athlete })
  }

  updateAthlete = async (c: Context) => {
    const id = c.req.param('id')
    const data = await c.req.json()
    
    const athlete = await this.service.updateAthlete(id, data)
    return c.json({ success: true, data: athlete })
  }

  deleteAthlete = async (c: Context) => {
    const id = c.req.param('id')
    await this.service.deleteAthlete(id)
    return c.json({ success: true, message: 'Athlete deleted successfully' })
  }

  createMetric = async (c: Context) => {
    const athleteId = c.req.param('id')
    const data = await c.req.json()
    
    const metric = await this.service.createMetric(athleteId, data)
    return c.json({ success: true, data: metric }, 201)
  }

  getAthleteMetrics = async (c: Context) => {
    const athleteId = c.req.param('id')
    const metricType = c.req.query('type') as MetricType | undefined
    
    const metrics = await this.service.getAthleteMetrics(athleteId, metricType)
    return c.json({ success: true, data: metrics })
  }
} 