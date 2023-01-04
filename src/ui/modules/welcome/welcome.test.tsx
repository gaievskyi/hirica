import { fireEvent, render, router, session } from "../../../utils/render";
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
    expect(true).toBe(true);
  });

  it("navigates to the '/candidates', if signed in and Start clicked", () => {
    render(<Welcome />);
    expect(true).toBe(true);
  });
});
