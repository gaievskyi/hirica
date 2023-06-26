import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc"

const CandidateInput = z.object({
  email: z.string().email(),
  name: z.string(),
  role: z.enum(["candidate", "recruiter", "system"]),
  password: z.string().min(8),
})

export const candidatesRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const candidates = await ctx.prisma.user.findMany({
      // where: { role: "candidate" },
      include: {
        profileData: true,
        responseSettings: true,
        notifications: true,
        sentNotifications: true,
      },
    })
    return candidates
  }),

  one: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const candidate = await ctx.prisma.user.findUnique({
      where: { id: input },
      include: {
        profileData: true,
        responseSettings: true,
        notifications: true,
        sentNotifications: true,
      },
    })
    if (!candidate) throw new Error("Candidate not found")
    return candidate
  }),

  create: publicProcedure
    .input(CandidateInput)
    .mutation(async ({ ctx, input }) => {
      const newCandidate = await ctx.prisma.user.create({
        data: {
          ...input,
          role: "candidate",
        },
        include: { profileData: true, responseSettings: true },
      })
      return newCandidate
    }),

  update: protectedProcedure
    .input(CandidateInput)
    .mutation(async ({ ctx, input }) => {
      const updatedCandidate = await ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: input,
        include: { profileData: true, responseSettings: true },
      })
      return updatedCandidate
    }),

  delete: protectedProcedure
    .input(z.string().uuid())
    .mutation(async ({ ctx, input }) => {
      const deletedCandidate = await ctx.prisma.user.delete({
        where: { id: input },
      })
      return deletedCandidate
    }),
})
