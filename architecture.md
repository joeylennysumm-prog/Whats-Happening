# Architecture

- API gateway for client ingress
- Domain services: auth, messaging, servers, notifications, ai
- Realtime socket cluster using Redis adapter
- PostgreSQL for source-of-truth data
- Redis for cache, presence, rate limit, pub/sub
- Object storage + CDN for media assets
- Async workers for AI, media processing, notification fanout
