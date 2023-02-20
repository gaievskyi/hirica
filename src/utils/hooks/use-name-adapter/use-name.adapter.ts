import { useMemo } from 'react'
import { z } from 'zod'

const fullNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

export const FullNameSchema = z.string().regex(fullNameRegex)

type FullName = z.infer<typeof FullNameSchema>

type FullNameParts = {
  name: string
  surname: string
}

const isValid = (fullName: FullName): boolean => {
  const validatedFullName = FullNameSchema.safeParse(fullName)
  return validatedFullName.success
}

const adapt = (fullName: FullName): FullNameParts => {
  const fullNameArray = fullName.split(' ')
  const surname = fullNameArray.slice(-1)[0] || ''
  const name = fullNameArray.slice(0, -1).join(' ')
  return { name, surname }
}

const useNameAdapter = (fullName: FullName): FullNameParts => {
  return useMemo(
    () => (isValid(fullName) ? adapt(fullName) : { name: '', surname: '' }),
    [fullName]
  )
}

export { useNameAdapter, fullNameRegex }
export type { FullName, FullNameParts }
