import { Prisma, WorkoutType } from '@repo/db'
import { initTRPC } from "@trpc/server";
import z from "zod";

const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

const appRouter = router({
  weight: {
    create: publicProcedure.input(z.object({
      weight: z.coerce.number().min(0).max(999999),
      note: z.string().max(999).transform((value) => value.length === 0 ? undefined : value),
      date: z.string().regex(/\d{4}-\d{2}-\d{2}/),
    })).mutation(async (opts) => {
      return Prisma.weight.create({
        data: {
          weight: opts.input.weight,
          date: new Date(opts.input.date),
          note: opts.input.note,
        },
      })
    }),
    list: publicProcedure.query(async (opts) => {
      return Prisma.weight.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      })
    }),
    delete: publicProcedure.input(z.object({
      id: z.number().int().positive(),
    })).mutation(async (opts) => {
      return Prisma.weight.delete({
        where: {
          id: opts.input.id,
        },
      })
    }),
  },
  workout: {
    create: publicProcedure.input(z.object({
      reps: z.object({
        type: z.literal(Object.values(WorkoutType)),
        count: z.number().int().min(0).max(999),
        weight: z.number().min(0).max(999).optional(),
      }).array(),
    })).mutation(async (opts) => {
      return Prisma.workout.create({
        data: {
          sets: {
            create: opts.input.reps.map((rep) => ({
              count: rep.count,
              type: rep.type,
              weight: rep.weight,
            }))
          },
        },
      })
    }),
    list: publicProcedure.query(async (opts) => {
      return Prisma.workout.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          sets: true,
        },
      })
    }),
  }
});

export type AppRouter = typeof appRouter

export {appRouter}
