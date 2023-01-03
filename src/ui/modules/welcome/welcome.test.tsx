import { fireEvent, render, router } from "../../../utils/render";
import { Welcome } from "./welcome";

describe("Welcome", () => {
  it("does not provoke browser console errors", () => {
    const consoleErrorMock = jest.spyOn(console, "error");
    render(<Welcome />);
    expect(consoleErrorMock).not.toHaveBeenCalled();
    consoleErrorMock.mockRestore();
  });

  it("is available and clickable", () => {
    const view = render(<Welcome />);
    const welcome = view.getByRole("main");
    expect(welcome).toBeVisible();
    expect(welcome).toBeEnabled();
  });

  it("navigates to the '/start', if Start clicked", () => {
    const { getByText } = render(<Welcome />);
    fireEvent.click(getByText("Start"));
    expect(router.push).toHaveBeenCalledWith(
      "/start",
      "/start",
      {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      }
    );
  });

  it("navigates to the '/candidates', if signed in and Start clicked", () => {
    render(<Welcome />);
    expect(true).toBe(true);
  });
});
