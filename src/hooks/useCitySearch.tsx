import { useState, useEffect } from 'react'
import { useWeatherAPI } from './useWeatherAPI'
import { useFilteredWeatherData } from './useFilteredWeatherData'

export function useCitySearch() {
    const [searched, setSearched] = useState(false)
    const [city, setCity] = useState<string | null>(null)
    const { data, isLoading, isError, error, refetch } = useWeatherAPI(
        city || '',
    )
    const { filteredData } = useFilteredWeatherData(data)

    useEffect(() => {
        if (city && !isError) {
            ;(async () => {
                const response = await refetch()

                if (response.isSuccess) {
                    console.log('API Response:', response.data)
                    console.log('Filtered Data:', filteredData)
                    setSearched(true)
                } else if (response.isError && error instanceof Error) {
                    alert(error.message)
                }
            })()
        }
    }, [city, refetch, error, isError, filteredData])

    return {
        searched,
        setSearched,
        city,
        setCity,
        isError,
        error,
        isLoading,
        data,
        filteredData,
    }
}
