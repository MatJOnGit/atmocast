import SearchBar from '../SearchForm'
import { IntroBlock } from './styles'

interface IntroProps {
    onSearch: (city: string) => void
}

function Intro({ onSearch }: IntroProps) {
    return (
        <IntroBlock>
            <div className="intro-wrapper">
                <p>Welcome.</p>
                <p>
                    Looking for weather data in a city to plan your next trip?
                </p>
                <SearchBar parentComponent="Intro" onSearch={onSearch} />
            </div>
        </IntroBlock>
    )
}

export default Intro
