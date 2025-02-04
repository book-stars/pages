# Global arguments and environment variables
ARG PNPM_VERSION=9.15.5
ARG PNPM_HOME="/pnpm"
ARG PATH="$PNPM_HOME:$PATH"

# Stage 1: Development dependencies environment
FROM node:20-alpine AS development-dependencies-env
RUN npm install -g pnpm@${PNPM_VERSION}

# Copy only the necessary files for installing dependencies
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app/
COPY ./website/package.json /app/website/

WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod=false

# Stage 2: Production dependencies environment
FROM node:20-alpine AS production-dependencies-env
RUN npm install -g pnpm@${PNPM_VERSION}

# Copy only the necessary files for installing production dependencies
COPY ./website/package.json /app/website/

WORKDIR /app/website
RUN pnpm install --prod

# Stage 3: Build environment
FROM node:20-alpine AS build-env
RUN npm install -g pnpm@${PNPM_VERSION}

# Copy the necessary files for building the application
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
COPY --from=development-dependencies-env /app/website/node_modules /app/website/node_modules

WORKDIR /app/website
RUN pnpm build

# Stage 4: Final production image
FROM node:20-alpine
RUN npm install -g pnpm@${PNPM_VERSION}

# Copy only the necessary files for running the application
COPY --from=production-dependencies-env /app/website/node_modules /app/website/node_modules
COPY --from=build-env /app/website/build /app/website/build
COPY --from=build-env /app/website/package.json /app/website/

WORKDIR /app/website
CMD ["pnpm", "start"]