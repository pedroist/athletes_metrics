import { PrismaClient, Athlete, PerformanceMetric, MetricType } from '@prisma/client'
import { CreateAthleteInput, UpdateAthleteInput, CreateMetricInput } from '../validators/athlete.validator'

export class AthleteRepository {
  constructor(private prisma: PrismaClient) {}

  async createAthlete(data: CreateAthleteInput): Promise<Athlete> {
    return this.prisma.athlete.create({ data })
  }

  async getAllAthletes(): Promise<Athlete[]> {
    return this.prisma.athlete.findMany()
  }

  async getAthleteById(id: string): Promise<Athlete | null> {
    return this.prisma.athlete.findUnique({
      where: { id },
      include: { performances: true }
    })
  }

  async updateAthlete(id: string, data: UpdateAthleteInput): Promise<Athlete> {
    return this.prisma.athlete.update({
      where: { id },
      data
    })
  }

  async deleteAthlete(id: string): Promise<Athlete> {
    return this.prisma.athlete.delete({
      where: { id }
    })
  }

  async createMetric(athleteId: string, data: CreateMetricInput): Promise<PerformanceMetric> {
    return this.prisma.performanceMetric.create({
      data: {
        ...data,
        athleteId
      }
    })
  }

  async getAthleteMetrics(athleteId: string, metricType?: MetricType): Promise<PerformanceMetric[]> {
    return this.prisma.performanceMetric.findMany({
      where: {
        athleteId,
        ...(metricType && { metricType }) //  is equivalent to metricType: metricType when metricType is provided.
      },
      orderBy: { timestamp: 'desc' }
    })
  }
}