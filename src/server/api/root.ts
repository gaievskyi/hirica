import { createTRPCRouter } from "~/server/api/trpc"
import { exampleRouter } from "~/server/api/routers/example"

/**
 * This is the primary router for the server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
})

export type AppRouter = typeof appRouter
