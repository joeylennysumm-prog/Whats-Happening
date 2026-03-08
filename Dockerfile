FROM node:20-alpine
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-workspace.yaml turbo.json tsconfig.base.json ./
COPY backend/workers ./backend/workers
RUN pnpm install --filter @platform/workers... --no-frozen-lockfile
WORKDIR /app/backend/workers
EXPOSE 8080
CMD ["pnpm", "dev"]
