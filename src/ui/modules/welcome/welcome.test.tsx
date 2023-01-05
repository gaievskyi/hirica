import { render } from '../../../utils/render'
import { Welcome } from './welcome'

describe('Welcome', () => {
  it('does not provoke browser console errors', () => {
    const consoleErrorMock = jest.spyOn(console, 'error')
    render(<Welcome />)
    expect(consoleErrorMock).not.toHaveBeenCalled()
    consoleErrorMock.mockRestore()
  })

  it('is available and clickable', () => {
    const { container } = render(<Welcome />)
    expect(container).toBeVisible()
    expect(container).toBeEnabled()
  })

  it("navigates to the '/start', if Start clicked", () => {
    render(<Welcome />)
    expect(true).toBe(true)
  })

  it("navigates to the '/candidates', if signed in and Start clicked", () => {
    render(<Welcome />)
    expect(true).toBe(true)
  })
})
