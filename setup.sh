#!/usr/bin/env bash
set -euo pipefail

if ! command -v pnpm >/dev/null 2>&1; then
  if command -v corepack >/dev/null 2>&1; then
    echo "pnpm not found. Enabling pnpm via corepack..."
    corepack enable
    corepack prepare pnpm@10.0.0 --activate
  else
    echo "pnpm not found and corepack unavailable. Install with: npm i -g pnpm"
    exit 1
  fi
fi

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from .env.example"
fi

echo "Installing dependencies..."
pnpm install

echo "Starting local infrastructure (PostgreSQL, Redis)..."
docker compose -f infra/docker/docker-compose.yml up -d

echo "Generating Prisma client..."
pnpm --filter @platform/db prisma:generate

echo "Setup complete. Run: pnpm dev"
