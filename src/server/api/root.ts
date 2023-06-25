import { createTRPCRouter } from "~/server/api/trpc"
import { profileRouter } from "~/server/api/routers/profile"

/**
 * This is the primary router for the server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  profile: profileRouter,
})

export type AppRouter = typeof appRouter
