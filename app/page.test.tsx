import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />)

    const heading = screen.getByText(/To get started, edit the page.tsx file/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders the Next.js logo', () => {
    render(<Home />)

    const logo = screen.getByAltText('Next.js logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders deploy and documentation links', () => {
    render(<Home />)

    const deployLink = screen.getByText('Deploy Now')
    const docsLink = screen.getByText('Documentation')

    expect(deployLink).toBeInTheDocument()
    expect(docsLink).toBeInTheDocument()
  })
})
