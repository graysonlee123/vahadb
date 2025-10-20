import { PrismaClient, WorkoutType } from './generated/prisma/client.js'

const Prisma = new PrismaClient()

export { Prisma, WorkoutType }
