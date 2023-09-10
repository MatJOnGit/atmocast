import { MeteoBlock } from './styles'

function Meteo() {
    return (
        <MeteoBlock>
            <div className="today-data-block">
                <div className="weather-info">Données météo du jour</div>
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
