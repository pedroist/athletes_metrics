-- CreateEnum
CREATE TYPE "MetricType" AS ENUM ('speed', 'strength', 'stamina', 'endurance');

-- CreateTable
CREATE TABLE "athlete" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "team" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "performance_metric" (
    "id" SERIAL PRIMARY KEY,
    "athlete_id" INTEGER NOT NULL,
    "metric_type" "MetricType" NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE INDEX "performance_metric_athlete_id_idx" ON "performance_metric"("athlete_id");

-- AddForeignKey
ALTER TABLE "performance_metric" ADD CONSTRAINT "performance_metric_athlete_id_fkey" 
    FOREIGN KEY ("athlete_id") REFERENCES "athlete"("id") ON DELETE CASCADE ON UPDATE CASCADE; 