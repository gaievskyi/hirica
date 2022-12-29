import { render } from "../../render";
import { Navigation } from "./navigation";

describe("Navigation", () => {
  it("renders without console errors", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<Navigation />);
    return expect(spy).not.toHaveBeenCalled();
  });

  it("renders correctly", () => {
    const view = render(<Navigation />);
    return expect(view.queryByTestId("navigation")).toBeVisible();
  });
});
