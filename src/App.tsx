import TitleBar from './components/TitleBar'
import Intro from './components/Intro'
import TodayWeather from './components/TodayWeather'
import NextDaysWeather from './components/NextDaysWeather'
import { useCitySearch } from './hooks/useCitySearch'
import './App.css'

function App() {
    const { searched, setCity, city, filteredData } = useCitySearch()

    function handleSearch(newCity: string) {
        setCity(newCity)
    }

    return (
        <div>
            <TitleBar searched={searched} onSearch={handleSearch} />
            {!searched ? (
                <Intro onSearch={handleSearch} />
            ) : (
                city && (
                    <div className="weather-block">
                        <TodayWeather city={city} filteredData={filteredData} />
                        <NextDaysWeather filteredData={filteredData} />
                    </div>
                )
            )}
        </div>
    )
}

export default App
