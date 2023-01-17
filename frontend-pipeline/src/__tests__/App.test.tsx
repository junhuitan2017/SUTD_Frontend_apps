import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'

it('renders hello message', () => {
  // in a real test a renderer like "@testing-library/react"
  // would take care of setting up the DOM elements
  const root = document.createElement('div')
  document.body.appendChild(root)

  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByText('Vite + React')).toBeInTheDocument()

  // Interact with, go to Login link
  act(() => {
    // Find the link (perhaps using the text content)
    const goLoginLink = document.querySelector('#login')
    // Click it
    goLoginLink?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })
})
