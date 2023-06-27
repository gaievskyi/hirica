import { zodResolver } from "@hookform/resolvers/zod"
import { type SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { useNameAdapter } from "~/utils/hooks"

type ResponseSettingsProps = {
  fullName: string
  email: string
  image?: string
}

const ResponseSettingsSchema = z.object({
  firstName: z.string().min(2).max(30),
  surname: z.string().min(2).max(30),
  email: z.string().email(),
  phone: z.coerce.number(),
  country: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
  responseMessage: z.string().min(0),
})
type ResponseSettingsType = z.infer<typeof ResponseSettingsSchema>

export const ResponseSettings = ({
  fullName,
  email,
}: ResponseSettingsProps) => {
  const { name, surname } = useNameAdapter(fullName)

  const form = useForm<ResponseSettingsType>({
    resolver: zodResolver(ResponseSettingsSchema),
    reValidateMode: "onChange",
  })

  const submit: SubmitHandler<ResponseSettingsType> = (formData) => {
    console.log({ formData })
  }

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Response settings
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Add contacts and set up your message to recruiters, when reveal
              yourself.
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={form.handleSubmit(submit)}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      defaultValue={name}
                      type="text"
                      id="firstName"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                      {...form.register("firstName")}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="surname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Surname
                    </label>
                    <input
                      defaultValue={surname}
                      type="text"
                      id="surname"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                      {...form.register("surname")}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      defaultValue={email}
                      type="text"
                      id="email"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                      {...form.register("email")}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone number
                    </label>
                    <input
                      type="number"
                      id="phone"
                      min="1"
                      autoComplete="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                      {...form.register("phone")}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      autoComplete="country-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                      {...form.register("country")}
                    >
                      <option>European Union</option>
                      <option>United States</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      autoComplete="address-level2"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                      {...form.register("city")}
                    />
                    <small className="mt-2 text-xs italic text-red-500">
                      {form.formState.errors.city?.message}
                    </small>
                  </div>
                </div>
                <div className="pt-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Response message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="responseMessage"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                      defaultValue=""
                      {...form.register("responseMessage")}
                    />
                    <small className="mt-2 text-xs italic text-red-500">
                      {form.formState.errors.responseMessage?.message}
                    </small>
                  </div>
                </div>
                <div className="pt-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Resume
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 hover:text-black"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
