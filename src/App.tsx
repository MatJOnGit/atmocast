import TitleBar from './components/TitleBar'
import WeatherContainer from './components/WeatherContainer'
import Intro from './components/Intro'
import { useCitySearch } from './hooks/useCitySearch'
import './index.css'

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
                    <WeatherContainer city={city} filteredData={filteredData} />
                )
            )}
        </div>
    )
}

export default App
