import { z } from "zod"

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc"

const ProfileDataInput = z.object({
  expectedSalary: z.number(),
  currency: z.string(),
  about: z.string(),
  skills: z.string(),
})

const ResponseSettingsInput = z.object({
  firstName: z.string(),
  surname: z.string(),
  email: z.string(),
  phone: z.number(),
  country: z.string(),
  city: z.string(),
  responseMessage: z.string().optional(),
})

export const profileRouter = createTRPCRouter({
  getProfileData: publicProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const profileData = await ctx.prisma.profileData.findUnique({
        where: { id: input },
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

  getResponseSettings: publicProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const responseSettings = await ctx.prisma.responseSettings.findUnique({
        where: { id: input },
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
})
