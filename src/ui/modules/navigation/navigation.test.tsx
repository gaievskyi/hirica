import { fireEvent, render, router } from "../../../utils/render";

import { Navigation } from "./navigation";

describe("Navigation", () => {
  it("does not provoke browser console errors", () => {
    const consoleErrorMock = jest.spyOn(console, "error");
    render(<Navigation />);
    expect(consoleErrorMock).not.toHaveBeenCalled();
    consoleErrorMock.mockRestore();
  });

  it("is available and clickable", () => {
    const view = render(<Navigation />);
    const navigation = view.getByTestId("navigation");
    expect(navigation).toBeVisible();
    expect(navigation).toBeEnabled();
  });

  it("has links", () => {
    const view = render(<Navigation />);
    const navigation = view.getByTestId("navigation");
    expect(navigation).toHaveTextContent("Candidates");
    expect(navigation).toHaveTextContent("Jobs");
    expect(navigation).toHaveTextContent("Statistics");
  });

  it("navigates to the '/candidates', if Candidates clicked", () => {
    const { getByText } = render(<Navigation />);
    fireEvent.click(getByText("Candidates"));
    expect(router.push).toHaveBeenCalledWith("/candidates", "/candidates", {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });

  it("navigates to the '/jobs', if Jobs clicked", () => {
    const { getByText } = render(<Navigation />);
    fireEvent.click(getByText("Jobs"));
    expect(router.push).toHaveBeenCalledWith("/jobs", "/jobs", {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });

  it("navigates to the '/statistics', if Statistics clicked", () => {
    const { getByText } = render(<Navigation />);
    fireEvent.click(getByText("Statistics"));
    expect(router.push).toHaveBeenCalledWith("/statistics", "/statistics", {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });
});
