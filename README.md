# Hirica

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

Yet another job board? **No**. Hirica is an **✨anonymous✨** job board, where you can apply for a job without having to worry about your identity being revealed. Basically, you don't even have to apply, just create an account and wait for the job offers to come to you.

## Active stack overview

- [x] [React](https://reactjs.org/) for UI
- [x] [Next.js](https://nextjs.org/) for SSR and SSG
- [x] [Next Auth](https://next-auth.js.org/) for authentication
- [x] [TypeScript](https://www.typescriptlang.org/) + [zod](https://zod.dev/) for type safety
- [x] [tRPC](https://trpc.io/docs/) for API routing and data fetching
- [x] [Prisma](https://www.prisma.io/) for database access and migrations
- [x] [pnpm](https://pnpm.io/) for package management (we use it as our **default** package manager)
- [x] [Tailwind.css](https://tailwindcss.com/) for styling
- [x] [Jest](https://jestjs.io/) for unit testing
- [ ] [Cypress](https://www.cypress.io/) for end-to-end testing
- [ ] [Storybook](https://storybook.js.org/) for component development
- [x] [ESLint](https://eslint.org/) for linting
- [x] [Prettier](https://prettier.io/) for code formatting
- [ ] [Husky](https://typicode.github.io/husky/#/) for Git hooks
- [x] [Docker](https://www.docker.com/) for containerization
- [x] [Vercel](https://vercel.com/) for hosting

## Project docs

- [Roadmap](/docs/ROADMAP.md)
- [Code style](/docs/CODE_STYLE.md)
- [Architecture](/docs/ARCHITECTURE.md)

## Prerequisites

```shell
# Install pnpm globally (skip if you already have it installed)
npm install -g pnpm
# Install dependencies
pnpm install
```

Create a `.env` file with your environment configurations using [template](/.env.example)

```shell
grep -v '^#' .env.example | grep -v '^$' > .env
```

## Run locally (development)

```shell
pnpm dev
```

## Build and run locally (production)

```shell
pnpm run build
pnpm start
```

## Run with Docker

1. Build Docker image

   ```shell
   docker build -t <image name> .
   ```

2. Run Docker container

   ```shell
   docker run --name <container name> -p 80:<port> --env-file .env -d <image name>
   ```
