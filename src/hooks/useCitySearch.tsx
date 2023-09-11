import { useState, useEffect } from 'react'
import { useWeatherAPI } from './useWeatherAPI'

export function useCitySearch() {
    const [searched, setSearched] = useState(false)
    const [city, setCity] = useState<string | null>(null)
    const { refetch } = useWeatherAPI(city || '')

    useEffect(() => {
        if (city) {
            ;(async () => {
                const response = await refetch()
                if (response.isSuccess) {
                    console.log('API Response:', response.data)
                    setSearched(true)
                }
            })()
        }
    }, [city, refetch])

    return {
        searched,
        setSearched,
        city,
        setCity,
    }
}
