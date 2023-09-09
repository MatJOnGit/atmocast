import { useState } from 'react'
import TitleBar from './components/TitleBar'
import WeatherData from './components/WeatherData'

function App() {
    const [searched, setSearched] = useState(true)

    return (
        <div>
            <TitleBar searched={searched} />
            <WeatherData />
        </div>
    )
}

export default App
