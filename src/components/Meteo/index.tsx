import { MeteoBlock } from './styles'
import { format, parse } from 'date-fns'

interface MeteoProps {
    city: string
    filteredData: any
}

function Meteo({ city, filteredData }: MeteoProps) {
    let formatedDate = 'Loading...'
    let temperature = 'Loading...'
    let tempMaxMin = 'Loading...'
    let weatherDescription = 'Loading...'
    let windSpeed = 'Loading...'
    let humidity = 'Loading...'
    let weatherIconSource

    if (filteredData && filteredData.list && filteredData.list.length > 0) {
        const firstDayData = filteredData.list[0]
        console.log(firstDayData)

        if (firstDayData.dt_txt) {
            const dateStr = firstDayData.dt_txt
            const parsedDate = parse(dateStr, 'yyyy-MM-dd HH:mm:ss', new Date())
            formatedDate = format(parsedDate, 'eee dd LLLL')
        }

        if (firstDayData.main) {
            if (firstDayData.main.temp) {
                temperature =
                    (firstDayData.main.temp - 273.15).toFixed(0) + '°C'
            }
            if (firstDayData.main.temp_max && firstDayData.main.temp_min) {
                const max = (firstDayData.main.temp_max - 273.15).toFixed(0)
                const min = (firstDayData.main.temp_min - 273.15).toFixed(0)
                tempMaxMin = `${max} / ${min} C`
            }

            if (firstDayData.main.humidity) {
                humidity = `Humidity: ${firstDayData.main.humidity} %`
            }
        }

        if (
            firstDayData.weather &&
            firstDayData.weather.length > 0 &&
            firstDayData.weather[0].description &&
            firstDayData.weather[0].icon
        ) {
            weatherDescription = firstDayData.weather[0].description
            weatherIconSource = `http://openweathermap.org/img/w/${firstDayData.weather[0].icon}.png`
        }

        if (firstDayData.wind && firstDayData.wind.speed) {
            const truncatedWindSpeed = Math.floor(firstDayData.wind.speed)
            windSpeed = `Wind: ${truncatedWindSpeed} km/h`
        }
    }

    return (
        <MeteoBlock>
            <div className="today-data-block">
                <ul className="weather-info">
                    <li>{city}</li>
                    <li>{formatedDate}</li>
                    <span className="splitter"></span>
                    <li>{temperature}</li>
                    <li>{tempMaxMin}</li>
                    <li>
                        <img src={weatherIconSource} alt="weather-icon" />
                        {weatherDescription}
                    </li>
                    <span className="splitter"></span>
                    <li>{windSpeed}</li>
                    <li>{humidity}</li>
                </ul>
                <div className="weather-icon">Icon</div>
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
