import { useState, useEffect } from 'react'
import { useWeatherAPI } from './useWeatherAPI'
import { useFilteredWeatherData } from './useFilteredWeatherData'

interface UseCitySearchReturn {
    isCityFound: boolean
    setFoundCity: React.Dispatch<React.SetStateAction<boolean>>
    city: string | null
    setCity: React.Dispatch<React.SetStateAction<string | null>>
    isError: boolean
    error: Error | null
    isLoading: boolean
    data: any
    filteredData: any
}

export function useCitySearch(): UseCitySearchReturn {
    const [isCityFound, setFoundCity] = useState(false)
    const [city, setCity] = useState<string | null>(null)
    const {
        data,
        isLoading,
        isError,
        error: unknownError,
        refetch,
    } = useWeatherAPI(city || '')
    const error = unknownError instanceof Error ? unknownError : null
    const { filteredData } = useFilteredWeatherData(data)

    useEffect(() => {
        if (city && !isError) {
            ;(async () => {
                const response = await refetch()

                if (response.isSuccess && response.data.cod === '200') {
                    setFoundCity(true)
                } else if (response.isError && error) {
                    alert(error.message)
                }
            })()
        }
    }, [city, refetch, error, isError, filteredData])

    return {
        isCityFound,
        setFoundCity,
        city,
        setCity,
        isError,
        error,
        isLoading,
        data,
        filteredData,
    }
}
