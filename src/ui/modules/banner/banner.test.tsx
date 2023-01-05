import { render } from 'utils/render'
import { Banner } from './banner'

describe('Banner', () => {
  it('does not provoke browser console errors', () => {
    const consoleErrorMock = jest.spyOn(console, 'error')
    render(<Banner />)
    expect(consoleErrorMock).not.toHaveBeenCalled()
    consoleErrorMock.mockRestore()
  })
})
