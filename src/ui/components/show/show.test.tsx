import { render } from 'utils/render'
import { Show } from './show'

describe('Show', () => {
  it('does not provoke browser console errors', () => {
    const consoleErrorMock = jest.spyOn(console, 'error')

    render(
      <Show when={true}>
        <div data-testid="mock-child" />
      </Show>
    )

    expect(consoleErrorMock).not.toHaveBeenCalled()
    consoleErrorMock.mockRestore()
  })

  it('renders correctly', () => {
    const isLoaded = true

    const view = render(
      <Show when={isLoaded}>
        <div data-testid="mock-child" />
      </Show>
    )

    expect(view.queryByTestId('mock-child')).toBeVisible()
  })

  it('renders empty without fallback given', () => {
    const isLoaded = false

    const view = render(
      <Show when={isLoaded}>
        <div data-testid="mock-child" />
      </Show>
    )

    expect(view.queryByTestId('mock-child')).toBeNull()
  })

  it('renders fallback during given condition', async () => {
    const isLoaded = false

    const Loader = () => <div data-testid="loader" />

    const view = render(
      <Show when={isLoaded} fallback={<Loader />}>
        <div data-testid="mock-child" />;
      </Show>
    )

    expect(view.queryByTestId('mock-child')).toBeNull()
    await expect(view.findByTestId('loader')).resolves.toBeInTheDocument()
  })
})
