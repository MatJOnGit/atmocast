import { useQuery } from 'react-query'

async function fetchWeather(city: string) {
    const apiKey = process.env.REACT_APP_OWP_KEY
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`,
    )

    const data = await response.json()

    if (Number(data.cod) === 200) {
        return data
    } else if (Number(data.cod) === 404) {
        throw new Error(
            'Ville introuvable. Veuillez réessayer avec un nom de ville valide',
        )
    } else {
        throw new Error(
            'Impossible de récupérer les données pour le moment. Veuillez réessayer plus tard',
        )
    }
}

export function useWeatherAPI(city: string) {
    const getWeatherQuery = useQuery({
        queryKey: ['weather', city],
        queryFn: () => fetchWeather(city),
        retry: 0,
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
