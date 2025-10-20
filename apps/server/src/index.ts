import { appRouter } from '@repo/router';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors'
import { config } from 'dotenv'

config()

const server = createHTTPServer({
  router: appRouter,
  middleware: cors(),
});

server.listen(3000)
