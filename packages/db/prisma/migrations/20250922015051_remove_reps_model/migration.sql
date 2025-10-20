/*
  Warnings:

  - You are about to drop the column `type` on the `Workout` table. All the data in the column will be lost.
  - You are about to drop the `Rep` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `count` to the `Set` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Set` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Rep" DROP CONSTRAINT "Rep_setId_fkey";

-- AlterTable
ALTER TABLE "public"."Set" ADD COLUMN     "count" INTEGER NOT NULL,
ADD COLUMN     "type" "public"."WorkoutType" NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "public"."Workout" DROP COLUMN "type";

-- DropTable
DROP TABLE "public"."Rep";
