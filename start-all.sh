#!/usr/bin/env bash
set -euo pipefail

if [ ! -f .env ]; then
  cp .env.example .env
fi

docker compose -f infra/docker/docker-compose.yml up -d postgres redis
pnpm dev
