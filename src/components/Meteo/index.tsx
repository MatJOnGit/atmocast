import { MeteoBlock } from './styles'
import { buildWeatherData } from './../../services/buildWeatherData'

interface MeteoProps {
    city: string
    filteredData: any
}

function Meteo({ city, filteredData }: MeteoProps) {
    const {
        formatedDate,
        temperature,
        tempMaxMin,
        weatherDescription,
        windSpeed,
        humidity,
        weatherIconSource,
    } = buildWeatherData(filteredData)

    return (
        <MeteoBlock>
            <div className="today-data-block">
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
            </div>

            <div className="next-days-weather">
                <div className="j1-weather">Data j+1</div>
                <div className="j2-weather">Data j+2</div>
                <div className="j3-weather">Data j+3</div>
                <div className="j4-weather">Data j+4</div>
            </div>
        </MeteoBlock>
    )
}

export default Meteo
