import { render } from 'utils/render'
import { Hero } from 'ui'

describe('Hero', () => {
  it('does not provoke browser console errors', () => {
    const consoleErrorMock = jest.spyOn(console, 'error')
    render(<Hero />)
    expect(consoleErrorMock).not.toHaveBeenCalled()
    consoleErrorMock.mockRestore()
  })

  it('is available and clickable', () => {
    const { container } = render(<Hero />)
    expect(container).toBeVisible()
    expect(container).toBeEnabled()
  })

  it("navigates to the '/profile', if signed in and Start clicked", () => {
    const { getByText } = render(<Hero />)
    const startButton = getByText('Get started')
    expect(startButton).toBeVisible()
    expect(startButton).toBeEnabled()
    expect(startButton).toHaveAttribute('href', '/profile')
  })
})
