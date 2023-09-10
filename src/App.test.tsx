import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'

const queryClient = new QueryClient()

test('renders AtmoCast header', () => {
    render(
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>,
    )

    const linkElement = screen.getByText(/AtmoCast/i)
    expect(linkElement).toBeInTheDocument()
})
