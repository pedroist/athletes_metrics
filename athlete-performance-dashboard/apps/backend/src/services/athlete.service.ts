import { AthleteRepository } from '../repositories/athlete.repository'
import { CreateAthleteInput, UpdateAthleteInput, CreateMetricInput } from '../validators/athlete.validator'
import { Athlete, PerformanceMetric, MetricType } from '@prisma/client'

export class AthleteService {
  constructor(private repository: AthleteRepository) {}

  async createAthlete(data: CreateAthleteInput): Promise<Athlete> {
    return this.repository.createAthlete(data)
  }

  async getAllAthletes(): Promise<Athlete[]> {
    return this.repository.getAllAthletes()
  }

  async getAthleteById(id: number): Promise<Athlete | null> {
    return this.repository.getAthleteById(id)
  }

  async updateAthlete(id: number, data: UpdateAthleteInput): Promise<Athlete> {
    return this.repository.updateAthlete(id, data)
  }

  async deleteAthlete(id: number): Promise<Athlete> {
    return this.repository.deleteAthlete(id)
  }

  async createMetric(athleteId: number, data: CreateMetricInput): Promise<PerformanceMetric> {
    return this.repository.createMetric(athleteId, data)
  }

  async getAthleteMetrics(athleteId: number, metricType?: MetricType): Promise<PerformanceMetric[]> {
    return this.repository.getAthleteMetrics(athleteId, metricType)
  }
}