import SearchBar from '../SearchBar'
import { IntroBlock } from './styles'

function Intro() {
    return (
        <IntroBlock>
            <p>Welcome.</p>
            <p>Looking for weather data in a city to plan your next trip?</p>
            <SearchBar parentComponent="Intro" />
        </IntroBlock>
    )
}

export default Intro
