import { useState } from 'react'
import TitleBar from './components/TitleBar'
import Meteo from './components/Meteo'
import Intro from './components/Intro'

function App() {
    const [searched, setSearched] = useState(true)

    return (
        <div>
            <TitleBar searched={searched} />
            {!searched ? <Intro /> : <Meteo />}
        </div>
    )
}

export default App
