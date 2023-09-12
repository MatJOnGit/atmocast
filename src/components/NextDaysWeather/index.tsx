import { buildNextDaysData } from '../../services/buildWeatherData'
import { NextDaysWeatherBlock } from './styles'

interface NextDaysWeatherProps {
    city: string
    filteredData: any
}

function NextDaysWeather({ city, filteredData }: NextDaysWeatherProps) {
    const nextDaysData = buildNextDaysData(filteredData)

    return (
        <NextDaysWeatherBlock>
            <div className="j1-weather">Data j+1</div>
            <div className="j2-weather">Data j+2</div>
            <div className="j3-weather">Data j+3</div>
            <div className="j4-weather">Data j+4</div>
        </NextDaysWeatherBlock>
    )
}

export default NextDaysWeather
