export interface Athlete {
    id: string;
    name: string;
    age: number;
    team: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface PerformanceMetric {
    id: string;
    athleteId: string;
    metricType: string;
    value: number;
    unit: string;
    timestamp: Date;
  }
  
  export type MetricType = 'speed' | 'strength' | 'stamina' | 'endurance';
  
  export interface CreateAthleteDto {
    name: string;
    age: number;
    team: string;
  }
  
  export interface CreateMetricDto {
    metricType: MetricType;
    value: number;
    unit: string;
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }