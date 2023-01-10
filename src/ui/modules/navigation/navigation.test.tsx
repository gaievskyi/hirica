import { fireEvent, render, router } from 'utils/render'
import { Navigation } from '@ui/modules'

describe('Navigation', () => {
  it('does not provoke browser console errors', () => {
    const consoleErrorMock = jest.spyOn(console, 'error')
    render(<Navigation />)
    expect(consoleErrorMock).not.toHaveBeenCalled()
    consoleErrorMock.mockRestore()
  })

  it('is available and clickable', () => {
    const { container } = render(<Navigation />)
    expect(container).toBeVisible()
    expect(container).toBeEnabled()
  })

  it('has links', () => {
    const { container } = render(<Navigation />)
    expect(container).toHaveTextContent('Candidates')
    expect(container).toHaveTextContent('Jobs')
    expect(container).toHaveTextContent('Statistics')
  })

  it("navigates to the '/', if Hirica clicked", () => {
    const { getByTestId } = render(<Navigation />)
    fireEvent.click(getByTestId('navigation-logo'))
    expect(router.push).toHaveBeenCalledWith('/', '/', {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    })
  })

  it("navigates to the '/candidates', if Candidates clicked", () => {
    const { getByText } = render(<Navigation />)
    fireEvent.click(getByText('Candidates'))
    expect(router.push).toHaveBeenCalledWith('/candidates', '/candidates', {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    })
  })

  it("navigates to the '/jobs', if Jobs clicked", () => {
    const { getByText } = render(<Navigation />)
    fireEvent.click(getByText('Jobs'))
    expect(router.push).toHaveBeenCalledWith('/jobs', '/jobs', {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    })
  })

  it("navigates to the '/statistics', if Statistics clicked", () => {
    const { getByText } = render(<Navigation />)
    fireEvent.click(getByText('Statistics'))
    expect(router.push).toHaveBeenCalledWith('/statistics', '/statistics', {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    })
  })
})
