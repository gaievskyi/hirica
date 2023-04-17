import { env } from "~/env.mjs"

export const IS_DEVELOPMENT = env.NODE_ENV === "development"
export const IS_TEST = env.NODE_ENV === "test"
export const IS_PRODUCTION = env.NODE_ENV === "production"
