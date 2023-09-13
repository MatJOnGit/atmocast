import SearchBar from '../SearchForm'
import { Header } from './styles'

interface TitleBarProps {
    isCityFound: boolean
    onSearch: (city: string) => void
}

function TitleBar({ isCityFound, onSearch }: TitleBarProps) {
    return (
        <Header>
            <div className="header-wrapper">
                <h1>AtmoCast</h1>
                {isCityFound && (
                    <SearchBar parentComponent="TitleBar" onSearch={onSearch} />
                )}
            </div>
        </Header>
    )
}

export default TitleBar
