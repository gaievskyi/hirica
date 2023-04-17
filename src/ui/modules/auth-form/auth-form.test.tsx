import { render } from "~/utils/render"
import { AuthForm } from "./auth-form"

describe("Sign up form", () => {
  it("renders correctly", () => {
    const { container } = render(<AuthForm />)
    expect(container).toBeVisible()
    // expect(container).toMatchSnapshot()
  })
})
