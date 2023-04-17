import { createNextApiHandler } from '@trpc/server/adapters/next'

import { createTRPCContext } from '~/server/api/trpc'
import { appRouter } from '~/server/api/root'
import { IS_DEVELOPMENT } from '~/utils/constants'

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError: IS_DEVELOPMENT
    ? ({ path, error }) => {
        console.error(
          `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
        )
      }
    : undefined,
})
