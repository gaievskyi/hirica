type FullName = string | null | undefined

export function useNameAdapter(fullName: FullName) {
  const fullNameArray: Array<string> = fullName?.split(' ') ?? []
  const surname = fullNameArray.pop()
  const name = fullNameArray.join(' ')

  return { fullName, name, surname }
}
