import { createTRPCRouter } from "~/server/api/trpc"
import {
  profileRouter,
  candidatesRouter,
  notificationsRouter,
} from "~/server/api/routers"

/**
 * This is the primary router for the server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  profile: profileRouter,
  candidates: candidatesRouter,
  notifications: notificationsRouter,
})

export type AppRouter = typeof appRouter
