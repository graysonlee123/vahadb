import { appRouter } from '@repo/router';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors'
import { config } from 'dotenv'

config()

if (typeof process.env.DATABASE_URL !== 'string') {
  throw new Error('Database environment variable not found.')
}

const server = createHTTPServer({
  router: appRouter,
  middleware: cors(),
});

server.listen(3000)
