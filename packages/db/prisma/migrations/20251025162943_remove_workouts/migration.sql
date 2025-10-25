/*
  Warnings:

  - You are about to drop the `Set` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Workout` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Set" DROP CONSTRAINT "Set_workoutId_fkey";

-- DropTable
DROP TABLE "public"."Set";

-- DropTable
DROP TABLE "public"."Workout";

-- DropEnum
DROP TYPE "public"."WorkoutType";
