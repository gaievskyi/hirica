import { render, screen } from "~/utils/render"
import { Switch, Match } from "./switch-match"

describe("Switch", () => {
  it("renders fallback if no Match components match", () => {
    render(
      <Switch fallback={<p>No matches found</p>}>
        <Match when={false}>
          <p>This should not be rendered</p>
        </Match>
        <Match when={false}>
          <p>This should not be rendered either</p>
        </Match>
      </Switch>
    )

    expect(screen.getByText("No matches found")).toBeInTheDocument()
  })

  it("renders the first Match component that matches", () => {
    render(
      <Switch fallback={<p>No matches found</p>}>
        <Match when={false}>
          <p>This should not be rendered</p>
        </Match>
        <Match when={true}>
          <p>This should be rendered</p>
        </Match>
        <Match when={true}>
          <p>This should not be rendered either</p>
        </Match>
      </Switch>
    )

    expect(screen.getByText("This should be rendered")).toBeInTheDocument()
  })
})

describe("Match", () => {
  it("throws an error if used outside a Switch component", () => {
    expect(() =>
      render(
        <Match when={true}>
          <p>This should not be rendered</p>
        </Match>
      )
    ).toThrow("Match components must be used inside a Switch component")
  })

  it("renders its children if the `when` prop is true", () => {
    render(
      <Switch fallback={<p>No matches found</p>}>
        <Match when={true}>
          <p>This should be rendered</p>
        </Match>
      </Switch>
    )

    expect(screen.getByText("This should be rendered")).toBeInTheDocument()
  })

  it("does not render its children if the `when` prop is false", () => {
    render(
      <Switch fallback={<p>No matches found</p>}>
        <Match when={false}>
          <p>This should not be rendered</p>
        </Match>
      </Switch>
    )

    expect(
      screen.queryByText("This should not be rendered")
    ).not.toBeInTheDocument()
  })
})
