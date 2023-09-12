import { buildFirstDayData } from '../../services/buildWeatherData'
import { TodayWeatherBlock } from './styles'

interface TodayWeatherProps {
    city: string
    filteredData: any
}

function TodayWeather({ city, filteredData }: TodayWeatherProps) {
    const {
        formatedDate,
        temperature,
        tempMaxMin,
        weatherDescription,
        windSpeed,
        humidity,
        weatherIconSource,
    } = buildFirstDayData(filteredData)

    return (
        <TodayWeatherBlock>
            <ul className="weather-info">
                <li>{city}</li>
                <li>{formatedDate}</li>
                <span className="splitter"></span>
                <li>{temperature}</li>
                <li>{tempMaxMin}</li>
                <li className="centered">
                    <img
                        src={weatherIconSource}
                        alt="weather-icon"
                        className="small-icon"
                    />
                    {weatherDescription}
                </li>
                <span className="splitter"></span>
                <li>{windSpeed}</li>
                <li>{humidity}</li>
            </ul>
            <div className="weather-icon">
                <img
                    src={weatherIconSource}
                    alt="weather-icon"
                    className="big-icon"
                />
            </div>
        </TodayWeatherBlock>
    )
}

export default TodayWeather
