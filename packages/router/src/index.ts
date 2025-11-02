import { Prisma } from '@repo/db'
import { initTRPC } from "@trpc/server";
import z from "zod";

const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

const appRouter = router({
  weight: {
    create: publicProcedure.input(z.object({
      date: z.string().regex(/\d{4}-\d{2}-\d{2}/),
      weight: z.coerce.number().min(0).max(999999).transform(Math.round),
      note: z.string().max(999).transform((value) => value.length === 0 ? undefined : value),
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
});

export type AppRouter = typeof appRouter

export {appRouter}
