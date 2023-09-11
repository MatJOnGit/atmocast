import { useQuery } from 'react-query'

async function fetchWeather(city: string) {
    const apiKey = process.env.REACT_APP_OWP_KEY
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`,
    )
    return response.json()
}

export function useWeatherAPI(city: string) {
    const getWeatherQuery = useQuery({
        queryKey: ['weather', city],
        queryFn: () => fetchWeather(city),
        enabled: false,
    })

    return {
        data: getWeatherQuery.data,
        isLoading: getWeatherQuery.isLoading,
        isError: getWeatherQuery.isError,
        error: getWeatherQuery.error,
        refetch: getWeatherQuery.refetch,
    }
}
