# Booksta.rs website with payload backend

It's monorepo with 2 apps:
[payload](./payload) - Next.js admin panel and definition of the Payload config.
[website](./website) - Remix website, imports the payload config from [payload](./payload)

## Setup

1. `cp ./payload/.env.example ./payload./.env` (copy the payload .env.example file to .env)
2. `cp ./website/.env.example ./website/.env` (copy the website .env.example file to .env)
3. `pnpm install`
4. `pnpm run dev:payload`
5. `pnpm run dev:website` (in a separate terminal)
