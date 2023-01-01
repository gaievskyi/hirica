import { render } from "../../../utils/render";
import { Details } from "./details";

describe("Details", () => {
  it("does not provoke browser console errors", () => {
    const consoleErrorMock = jest.spyOn(console, "error");
    render(<Details />);
    expect(consoleErrorMock).not.toHaveBeenCalled();
    consoleErrorMock.mockRestore();
  });
});
