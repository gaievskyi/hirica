import { render } from "../../render";
import { Show } from "./show";
import "@testing-library/jest-dom";

describe("Show", () => {
  it("renders without console errors", () => {
    const spy = jest.spyOn(global.console, "error");
    render(
      <Show when={true} fallback="Loading..">
        <div data-testid="mock-child" />
      </Show>
    );
    return expect(spy).not.toHaveBeenCalled();
  });

  it("renders correctly", () => {
    const isLoaded = true;

    const view = render(
      <Show when={isLoaded}>
        <div data-testid="mock-child" />
      </Show>
    );

    return expect(view.queryByTestId("mock-child")).toBeVisible();
  });

  it("renders empty without fallback given", () => {
    const view = render(
      <Show when={false}>
        <div data-testid="mock-child" />
      </Show>
    );
    return expect(view.queryByTestId("mock-child")).toBeNull();
  });

  it("renders fallback during async operation", async () => {
    const isLoaded = false;

    const Loader = () => <div data-testid="loader" />;

    const view = render(
      <Show when={isLoaded} fallback={<Loader />}>
        <div data-testid="mock-child" />;
      </Show>
    );

    expect(view.queryByTestId("mock-child")).toBeNull();
    await expect(view.findByTestId("loader")).resolves.toBeInTheDocument();
  });
});
