import { useEffect, useState } from 'react'

interface WeatherData {
    list: Array<any>
}

export const useFilteredWeatherData = (data: WeatherData | null) => {
    const [filteredData, setFilteredData] = useState<WeatherData | null>(null)

    useEffect(() => {
        if (data) {
            const filteredList = [0, 8, 16, 24, 32].map(
                (index) => data.list[index],
            )
            setFilteredData({ ...data, list: filteredList })
        }
    }, [data])

    return { filteredData }
}
