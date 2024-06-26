import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { api } from "~/utils/api"
import { RiLoader2Fill } from "react-icons/ri"
import { AiOutlineCheck } from "react-icons/ai"
import toast from "react-hot-toast"
import { type Dispatch, type SetStateAction, useEffect, useState } from "react"
import { Transition } from "@tailwindui/react"

const ProfileDataSchema = z.object({
  expectedSalary: z.coerce.number().min(100).max(20000),
  currency: z.string().min(3).max(3),
  about: z.string().min(30).max(2048),
  skills: z.string(),
})

type ProfileData = z.infer<typeof ProfileDataSchema>

const currencies = ["USD", "CAD", "EUR", "PLN", "UAH"]

type Notifier = () => string
const notifySuccess: Notifier = () => toast.success("Profile updated.")
const notifyError: Notifier = () => toast.error("Error during profile update.")

export const PublicData = () => {
  const utils = api.useContext()
  const { data: session } = useSession()
  const { data: profileData, isLoading: isProfileLoading } =
    api.profile.profileData.useQuery(session?.user.id)

  const [isSalaryModified, setIsSalaryModified] = useState(false)
  const [isAboutModified, setIsAboutModified] = useState(false)
  const [isSkillsModified, setIsSkillsModified] = useState(false)
  const [isCurrencyModified, setIsCurrencyModified] = useState(false)

  const { mutate: create, isLoading: isCreating } =
    api.profile.createProfileData.useMutation({
      onSuccess: async () => {
        notifySuccess()
        await utils.profile.profileData.invalidate(session?.user.id)
      },
      onError: () => {
        notifyError()
      },
    })

  const { mutate: update, isLoading: isUpdating } =
    api.profile.updateProfileData.useMutation({
      onSuccess: async () => {
        notifySuccess()
        await utils.profile.profileData.invalidate(session?.user.id)
      },
      onError: () => {
        notifyError()
      },
    })

  const form = useForm<ProfileData>({
    resolver: zodResolver(ProfileDataSchema),
    reValidateMode: "onChange",
  })

  const submit: SubmitHandler<ProfileData> = (formData) => {
    if (!session) return

    const setModified: Record<
      keyof ProfileData,
      Dispatch<SetStateAction<boolean>>
    > = {
      expectedSalary: setIsSalaryModified,
      about: setIsAboutModified,
      skills: setIsSkillsModified,
      currency: setIsCurrencyModified,
    }

    const action = profileData ? update : create
    action({ ...formData, userId: session.user.id })

    if (profileData) {
      const profileDataArray = Object.keys(setModified) as Array<
        keyof ProfileData
      >
      profileDataArray
        .filter((field) => formData[field] !== profileData[field])
        .forEach((field) => setModified[field](true))
    }
  }

  useEffect(() => {
    if (!profileData) return
    const { id, userId, ...adaptedData } = profileData
    if (!adaptedData) return
    form.reset(adaptedData)
  }, [form, profileData])

  useEffect(() => {
    if (isSalaryModified || isCurrencyModified) {
      const unmountTimer = setTimeout(() => {
        setIsSalaryModified(false)
        setIsCurrencyModified(false)
      }, 5000)
      return () => clearTimeout(unmountTimer)
    }
  }, [isSalaryModified, isCurrencyModified])

  useEffect(() => {
    if (isAboutModified) {
      const unmountTimer = setTimeout(() => {
        setIsAboutModified(false)
      }, 5000)
      return () => clearTimeout(unmountTimer)
    }
  }, [isAboutModified])

  useEffect(() => {
    if (isSkillsModified) {
      const unmountTimer = setTimeout(() => {
        setIsSkillsModified(false)
      }, 5000)
      return () => clearTimeout(unmountTimer)
    }
  }, [isSkillsModified])

  const isInputDisabled = isProfileLoading || isCreating || isUpdating

  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Profile
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div className="mt-5 transition-all md:col-span-2 md:mt-0">
          <form onSubmit={form.handleSubmit(submit)}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div>
                  <label
                    htmlFor="salary"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expected salary
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <div>
                      <div>
                        <div className="relative">
                          <input
                            type="number"
                            min="100"
                            step="100"
                            id="expectedSalary"
                            className="block w-full rounded-md border-gray-300 pr-20 transition-all focus:border-black focus:ring-black disabled:animate-pulse disabled:cursor-not-allowed disabled:brightness-90 sm:text-sm"
                            placeholder="Provide your expected salary and choose currency"
                            disabled={isInputDisabled}
                            {...form.register("expectedSalary")}
                          />
                        </div>
                        <Transition
                          show={isSalaryModified || isCurrencyModified}
                          enter="transition ease-out duration-500 transform"
                          enterFrom="opacity-0 -translate-y-2"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease duration-300 transform"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-2"
                        >
                          <small className="absolute right-0 -z-0 inline-flex items-center justify-end gap-1 pt-2 text-xs font-medium leading-none">
                            <AiOutlineCheck className="animate-pulse" /> Changes
                            saved
                          </small>
                        </Transition>
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label htmlFor="currency" className="sr-only">
                            Currency
                          </label>
                          <select
                            id="currency"
                            className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 transition-all focus:border-black focus:ring-black disabled:animate-pulse disabled:cursor-not-allowed disabled:brightness-90 sm:text-sm"
                            disabled={isInputDisabled}
                            {...form.register("currency")}
                          >
                            {currencies.map((currency) => (
                              <option key={currency} value={currency}>
                                {currency}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      {form.formState.errors.expectedSalary && (
                        <div className="text-xs italic text-red-400">
                          <span>
                            {form.formState.errors.expectedSalary.message}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    About
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      rows={5}
                      className="mt-1 block min-h-[80px] w-full rounded-md border-gray-300 shadow-sm transition-all focus:border-black focus:ring-black disabled:animate-pulse disabled:cursor-not-allowed disabled:brightness-90 sm:text-sm"
                      placeholder="Use this space to tell everyone about your experience, achievements or career goals."
                      disabled={isInputDisabled}
                      {...form.register("about")}
                    />
                    <Transition
                      show={isAboutModified}
                      enter="transition ease-out duration-500 transform"
                      enterFrom="opacity-0 -translate-y-2"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease duration-300 transform"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-2"
                    >
                      <small className="inline-flex w-full items-center justify-end gap-1 text-xs font-medium leading-none">
                        <AiOutlineCheck className="animate-pulse" /> Changes
                        saved
                      </small>
                    </Transition>
                    <small className="mt-2 text-xs italic text-red-500">
                      {form.formState.errors.about?.message}
                    </small>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Stay anonymous. It is not allowed to post any contact
                    information here.
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="skills"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Skills
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="skills"
                      rows={5}
                      className="mt-1 block min-h-[80px] w-full rounded-md border-gray-300 shadow-sm transition-all focus:border-black focus:ring-black disabled:animate-pulse disabled:cursor-not-allowed disabled:brightness-90 sm:text-sm"
                      placeholder="Example: JavaScript, Nest.js, Agile"
                      disabled={isInputDisabled}
                      {...form.register("skills")}
                    />
                    <Transition
                      show={isSkillsModified}
                      enter="transition ease-out duration-500 transform"
                      enterFrom="opacity-0 -translate-y-2"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease duration-300 transform"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-2"
                    >
                      <small className="inline-flex w-full items-center justify-end gap-1 text-xs font-medium leading-none">
                        <AiOutlineCheck className="animate-pulse" /> Changes
                        saved
                      </small>
                    </Transition>
                    <small className="mt-2 text-xs italic text-red-500">
                      {form.formState.errors.skills?.message}
                    </small>
                  </div>
                  <p className="mt-2  text-xs text-gray-500">
                    List your skills here. Separate them with commas.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  disabled={isCreating || isUpdating}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed"
                >
                  {(isCreating || isUpdating) && (
                    <RiLoader2Fill className="animate-spin" />
                  )}
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
