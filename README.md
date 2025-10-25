# vahaDB

A weight and workout tracking application built with Turbo, React, and Prisma.

## Prerequisites

- Node.js 18+
- pnpm 8+

## Quick Start

```shell
# Install dependencies
pnpm install

# Start development servers
pnpm dev

# Build all packages
pnpm build
```

## Project Structure

```
apps/
├── client/     # Frontend application
└── server/     # Backend API
packages/
├── db/         # Database schema and client
├── router/     # Shared routing utilities
└── tsconfig/   # Shared TypeScript config
```

## Database

```shell
# Generate Prisma client
pnpm --filter db exec prisma generate

# Run local database migrations
pnpm --filter db exec prisma migrate dev
pnpm --filter db exec prisma migrate dev --name foo

# Reset local database
pnpm --filter db exec prisma migrate reset
```

## Development

```shell
# Run specific app in dev mode
pnpm --filter client dev
pnpm --filter server dev

# Build specific package
pnpm --filter db build
```
