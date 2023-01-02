import { render } from "../../../utils/render";
import { SignUpForm } from "./sign-up-form";

describe("Sign up form", () => {
  it("renders correctly", () => {
    const { container } = render(<SignUpForm />);
    expect(container).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
