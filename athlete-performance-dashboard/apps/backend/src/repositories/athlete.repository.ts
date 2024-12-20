import { PrismaClient, Athlete, PerformanceMetric, MetricType } from '@prisma/client'
import { CreateAthleteInput, UpdateAthleteInput, CreateMetricInput } from '../validators/athlete.validator'
import { prisma } from '../lib/prisma'

export class AthleteRepository {
  constructor(private prisma: PrismaClient) {}

  async createAthlete(data: CreateAthleteInput): Promise<Athlete> {
    return this.prisma.athlete.create({ data })
  }

  async getAllAthletes(): Promise<Athlete[]> {
    return this.prisma.athlete.findMany()
  }

  async getAthleteById(id: number): Promise<Athlete | null> {
    return this.prisma.athlete.findUnique({
      where: { id },
      include: { performances: true }
    })
  }

  async updateAthlete(id: number, data: UpdateAthleteInput): Promise<Athlete> {
    return this.prisma.athlete.update({
      where: { id },
      data
    })
  }

  async deleteAthlete(id: number): Promise<Athlete> {
    return this.prisma.athlete.delete({
      where: { id }
    })
  }

  async createMetric(athleteId: number, data: CreateMetricInput): Promise<PerformanceMetric> {
    return this.prisma.performanceMetric.create({
      data: {
        ...data,
        athleteId
      }
    })
  }

  async getAthleteMetrics(athleteId: number, metricType?: MetricType): Promise<PerformanceMetric[]> {
    return this.prisma.performanceMetric.findMany({
      where: {
        athleteId,
        ...(metricType && { metricType })
      },
      orderBy: { timestamp: 'desc' }
    })
  }
}