-- CreateEnum
CREATE TYPE "public"."WorkoutType" AS ENUM ('PUSHUP', 'SQUAT');

-- CreateTable
CREATE TABLE "public"."Workout" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "public"."WorkoutType" NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Set" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "workoutId" INTEGER NOT NULL,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Rep" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "setId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION,

    CONSTRAINT "Rep_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Set" ADD CONSTRAINT "Set_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "public"."Workout"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rep" ADD CONSTRAINT "Rep_setId_fkey" FOREIGN KEY ("setId") REFERENCES "public"."Set"("id") ON DELETE CASCADE ON UPDATE CASCADE;
