import { parse, format } from 'date-fns'

interface FilteredData {
    list: any[]
}

const defaultText = 'Loading...'

function formatDate(dateStr: string): string {
    const parsedDate = parse(dateStr, 'yyyy-MM-dd HH:mm:ss', new Date())
    return format(parsedDate, 'eee dd LLLL')
}

function formatTemperature(temp: number): string {
    return (temp - 273.15).toFixed(0) + '°C'
}

function formatTempMaxMin(tempMax: number, tempMin: number): string {
    const max = (tempMax - 273.15).toFixed(0)
    const min = (tempMin - 273.15).toFixed(0)
    return `${max} / ${min} C`
}

function formatWindSpeed(speed: number): string {
    const truncatedWindSpeed = Math.floor(speed)
    return `Wind: ${truncatedWindSpeed} km/h`
}

function formatHumidity(humidity: number): string {
    return `Humidity: ${humidity} %`
}

const transformationMap = {
    formatedDate: (data: any) =>
        data.dt_txt ? formatDate(data.dt_txt) : defaultText,
    temperature: (data: any) =>
        data.main?.temp ? formatTemperature(data.main.temp) : defaultText,
    tempMaxMin: (data: any) =>
        data.main
            ? formatTempMaxMin(data.main.temp_max, data.main.temp_min)
            : defaultText,
    weatherDescription: (data: any) =>
        data.weather?.[0]?.description || defaultText,
    windSpeed: (data: any) =>
        data.wind?.speed ? formatWindSpeed(data.wind.speed) : defaultText,
    humidity: (data: any) =>
        data.main?.humidity ? formatHumidity(data.main.humidity) : defaultText,
    weatherIconSource: (data: any) =>
        data.weather?.[0]?.icon
            ? `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
            : undefined,
}

export function buildFirstDayData(filteredData: FilteredData) {
    let result: { [key: string]: string | undefined } = {}

    const firstDayData = filteredData?.list?.[0]

    if (!firstDayData) {
        return Object.keys(transformationMap).reduce(
            (acc, key) => {
                acc[key] = defaultText
                return acc
            },
            {} as { [key: string]: string },
        )
    }

    for (const [key, transform] of Object.entries(transformationMap)) {
        result[key] = transform(firstDayData)
    }

    return result
}

export function buildNextDaysData(filteredData: FilteredData) {
    const nextDaysData = filteredData?.list?.slice(1, 5) // Getting the data for the next 4 days

    if (!nextDaysData || nextDaysData.length === 0) {
        return Array.from({ length: 4 }, () =>
            Object.keys(transformationMap).reduce(
                (acc, key) => {
                    acc[key] = defaultText
                    return acc
                },
                {} as { [key: string]: string },
            ),
        )
    }

    const result = nextDaysData.map((dayData) => {
        let dayResult: { [key: string]: string | undefined } = {}

        for (const [key, transform] of Object.entries(transformationMap)) {
            if (
                [
                    'formatedDate',
                    'weatherIconSource',
                    'weatherDescription',
                    'tempMaxMin',
                ].includes(key)
            ) {
                dayResult[key] = transform(dayData)
            }
        }

        return dayResult
    })

    return result
}
