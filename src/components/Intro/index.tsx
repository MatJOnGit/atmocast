import SearchBar from '../SearchBar'
import { IntroBlock } from './styles'

interface IntroProps {
    onSearch: (city: string) => void
}

function Intro({ onSearch }: IntroProps) {
    return (
        <IntroBlock>
            <p>Welcome.</p>
            <p>Looking for weather data in a city to plan your next trip?</p>
            <SearchBar parentComponent="Intro" onSearch={onSearch} />
        </IntroBlock>
    )
}

export default Intro
