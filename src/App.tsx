import { useState } from 'react'
import TitleBar from './components/TitleBar'
import Meteo from './components/Meteo'
import Intro from './components/Intro'

function App() {
    const [searched, setSearched] = useState(false)

    function handleSearch(city: string) {
        console.log('Searching for', city)
        setSearched(true)
    }

    return (
        <div>
            <TitleBar searched={searched} onSearch={handleSearch} />
            {!searched ? <Intro onSearch={handleSearch} /> : <Meteo />}
        </div>
    )
}

export default App
