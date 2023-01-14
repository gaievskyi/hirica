import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

import { env } from 'env/server.mjs'
import { prisma } from 'server/db/client'

import NextAuth, { type NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
  pages: {
    signIn: '/start',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: env.MAIL_SERVER,
      from: '<no-reply@hirica.io>',
    }),
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET ?? '',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
