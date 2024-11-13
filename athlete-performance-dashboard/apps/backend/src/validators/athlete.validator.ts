import { z } from 'zod'
import { MetricType } from '@prisma/client'

export const createAthleteSchema = z.object({
  name: z.string().min(2).max(100),
  age: z.number().int().min(0).max(150),
  team: z.string().min(2).max(100),
})

export const updateAthleteSchema = createAthleteSchema.partial()

export const createMetricSchema = z.object({
  metricType: z.nativeEnum(MetricType),
  value: z.number().positive(),
  unit: z.string().min(1).max(20),
})

export type CreateAthleteInput = z.infer<typeof createAthleteSchema>
export type UpdateAthleteInput = z.infer<typeof updateAthleteSchema>
export type CreateMetricInput = z.infer<typeof createMetricSchema>