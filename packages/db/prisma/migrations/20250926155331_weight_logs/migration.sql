-- CreateTable
CREATE TABLE "public"."Weight" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Weight_pkey" PRIMARY KEY ("id")
);
