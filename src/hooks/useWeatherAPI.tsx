import { useQuery } from 'react-query'

async function fetchWeather(city: string) {
    const apiKey = process.env.OWP_key
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`,
    )
    return response.json()
}

export function useWeatherAPI(city: string) {
    return useQuery(['weather', city], () => fetchWeather(city), {
        enabled: false,
    })
}
