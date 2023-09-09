import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders AtmoCast header', () => {
    render(<App />)
    const linkElement = screen.getByText(/AtmoCast/i)
    expect(linkElement).toBeInTheDocument()
})
