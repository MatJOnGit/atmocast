import { buildNextDaysData } from '../../services/buildWeatherData'
import { NextDaysWeatherBlock } from './styles'

interface NextDaysWeatherProps {
    filteredData: any
}

function NextDaysWeather({ filteredData }: NextDaysWeatherProps) {
    const nextDaysData = buildNextDaysData(filteredData)

    return (
        <NextDaysWeatherBlock>
            {nextDaysData.map((day, index) => (
                <ul key={`day-${index}`}>
                    <li>{day.formatedDate}</li>
                    <img src={day.weatherIconSource} alt="weather-icon" />
                    <li>{day.weatherDescription}</li>
                    <li>{day.tempMaxMin}</li>
                </ul>
            ))}
        </NextDaysWeatherBlock>
    )
}

export default NextDaysWeather
