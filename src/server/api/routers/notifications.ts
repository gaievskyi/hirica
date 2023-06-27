import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc"

const NotificationInput = z.object({
  userId: z.string(),
  senderId: z.string(),
  senderRole: z.string(),
  senderName: z.string(),
  type: z.enum(["CONTACTS_REQUEST"]),
  status: z.enum(["PENDING", "ACCEPTED", "REJECTED"]),
  contactRevealed: z.boolean(),
  message: z.string(),
})

export const notificationsRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const notifications = await ctx.prisma.notification.findMany({
      include: { user: true, sender: true },
    })
    return notifications
  }),

  one: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const notification = await ctx.prisma.notification.findUnique({
      where: { id: input },
      include: { user: true, sender: true },
    })
    if (!notification) throw new Error("Notification not found")
    return notification
  }),

  create: publicProcedure
    .input(NotificationInput)
    .mutation(async ({ ctx, input }) => {
      const newNotification = await ctx.prisma.notification.create({
        data: input,
        include: { user: true, sender: true },
      })
      return newNotification
    }),

  update: protectedProcedure
    .input(NotificationInput)
    .mutation(async ({ ctx, input }) => {
      const updatedNotification = await ctx.prisma.notification.update({
        where: { id: ctx.session.user.id },
        data: input,
        include: { user: true, sender: true },
      })
      return updatedNotification
    }),

  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const deletedNotification = await ctx.prisma.notification.delete({
        where: { id: input },
      })
      return deletedNotification
    }),
})
