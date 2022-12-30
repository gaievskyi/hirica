import Router from "next/router";
import { RouterContext } from "next/dist/shared/lib/router-context";

import { fireEvent, render } from "../../render";
import { mockRouter } from "../../test-utils";

import { Navigation } from "./navigation";

describe("Navigation", () => {
  const router = mockRouter(Router);

  it("renders without console errors", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<Navigation />);
    expect(spy).not.toHaveBeenCalled();
  });

  it("renders correctly", () => {
    const view = render(<Navigation />);
    expect(view.queryByTestId("navigation")).toBeVisible();
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

  it("navigates to the /candidates route, if Candidates clicked", () => {
    const { getByText } = render(
      <RouterContext.Provider value={router}>
        <Navigation />
      </RouterContext.Provider>
    );
    fireEvent.click(getByText("Candidates"));
    expect(router.push).toHaveBeenCalledWith("/candidates", "/candidates", {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });

  it("navigates to the /jobs route, if Jobs clicked", () => {
    const { getByText } = render(
      <RouterContext.Provider value={router}>
        <Navigation />
      </RouterContext.Provider>
    );
    fireEvent.click(getByText("Jobs"));
    expect(router.push).toHaveBeenCalledWith("/jobs", "/jobs", {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });

  it("navigates to the /statistics route, if Statistics clicked", () => {
    const { getByText } = render(
      <RouterContext.Provider value={router}>
        <Navigation />
      </RouterContext.Provider>
    );
    fireEvent.click(getByText("Statistics"));
    expect(router.push).toHaveBeenCalledWith("/statistics", "/statistics", {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });
});
