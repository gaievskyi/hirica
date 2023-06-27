import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc"

const ProfileDataInput = z.object({
  userId: z.string(),
  expectedSalary: z.number(),
  currency: z.string(),
  about: z.string(),
  skills: z.string(),
})

const ResponseSettingsInput = z.object({
  userId: z.string(),
  firstName: z.string(),
  surname: z.string(),
  email: z.string(),
  phone: z.number(),
  country: z.string(),
  city: z.string(),
  responseMessage: z.string().optional(),
})

export const profileRouter = createTRPCRouter({
  profileData: publicProcedure
    .input(z.string().optional())
    .query(async ({ ctx, input }) => {
      if (!input) throw new Error("Input is undefined")
      const profileData = await ctx.prisma.profileData.findUnique({
        where: { userId: input },
      })
      return profileData
    }),

  createProfileData: protectedProcedure
    .input(ProfileDataInput)
    .mutation(async ({ ctx, input }) => {
      const newProfileData = await ctx.prisma.profileData.create({
        data: input,
      })
      return newProfileData
    }),

  updateProfileData: protectedProcedure
    .input(ProfileDataInput)
    .mutation(async ({ ctx, input }) => {
      const updatedProfileData = await ctx.prisma.profileData.update({
        where: { userId: ctx.session.user.id },
        data: input,
      })
      return updatedProfileData
    }),

  responseSettings: publicProcedure
    .input(z.string().optional())
    .query(async ({ ctx, input }) => {
      if (!input) throw new Error("Input is undefined")
      const responseSettings = await ctx.prisma.responseSettings.findUnique({
        where: { userId: input },
      })
      return responseSettings
    }),

  createResponseSettings: protectedProcedure
    .input(ResponseSettingsInput)
    .mutation(async ({ ctx, input }) => {
      const newResponseSettings = await ctx.prisma.responseSettings.create({
        data: input,
      })
      return newResponseSettings
    }),

  updateResponseSettings: protectedProcedure
    .input(ResponseSettingsInput)
    .mutation(async ({ ctx, input }) => {
      const updatedResponseSettings = await ctx.prisma.responseSettings.update({
        where: { userId: ctx.session.user.id },
        data: input,
      })
      return updatedResponseSettings
    }),
})
