import TodayWeather from '../TodayWeather'
import NextDaysWeather from '../NextDaysWeather'
import { WeatherBlock } from './styles'

interface WeatherProps {
    city: string
    filteredData: any
}

function WeatherContainer({ city, filteredData }: WeatherProps) {
    return (
        <WeatherBlock>
            <TodayWeather city={city} filteredData={filteredData} />
            <NextDaysWeather filteredData={filteredData} />
        </WeatherBlock>
    )
}

export default WeatherContainer
