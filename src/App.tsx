import { useState, useEffect } from 'react'
import TitleBar from './components/TitleBar'
import Meteo from './components/Meteo'
import Intro from './components/Intro'
import { useWeatherAPI } from './hooks/useWeatherAPI'
import './index.css'

function App() {
    const [searched, setSearched] = useState(false)
    const [city, setCity] = useState<string | null>(null)
    const { refetch } = useWeatherAPI(city || '')

    useEffect(() => {
        if (city) {
            ;(async () => {
                const response = await refetch()
                if (response.isSuccess) {
                    console.log('API Response:', response.data)
                    setSearched(true)
                }
            })()
        }
    }, [city, refetch])

    async function handleSearch(newCity: string) {
        setCity(newCity)
    }

    return (
        <div>
            <TitleBar searched={searched} onSearch={handleSearch} />
            {!searched ? <Intro onSearch={handleSearch} /> : <Meteo />}
        </div>
    )
}

export default App
