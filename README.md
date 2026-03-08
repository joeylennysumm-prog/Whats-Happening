# Global Messaging Platform

Production-oriented monorepo scaffold for a modern messaging platform inspired by WhatsApp, Discord, Telegram, and Slack.

## Quick Start (Easy Install)

1. Open this folder in Finder: `messaging-platform`
2. Double-click `INSTALL.command` (or run in terminal):

```bash
cd "/Users/joey.summers/Documents/New project 2/messaging-platform"
bash scripts/setup.sh
```

That script will:
- Install dependencies
- Copy `.env.example` to `.env` (if missing)
- Start PostgreSQL + Redis via Docker
- Generate Prisma client

Then run all services:

```bash
pnpm dev
```

To start from Finder quickly, double-click `START.command`.

## Monorepo Layout
- `apps/web` Next.js PWA
- `apps/mobile` React Native (Expo)
- `apps/desktop` Electron wrapper
- `backend/*` microservices
- `packages/*` shared modules
- `database/schema` Prisma schema
- `infra/docker` container setup

## Core URLs
- Gateway API: `http://localhost:8080`
- Realtime Socket API: `http://localhost:8081`
- Web app: `http://localhost:3000`

## Notes
- This is a production-grade foundation, not a toy demo.
- Extend each service module in place (`routes`, `services`, `repositories`) for full feature completion.
