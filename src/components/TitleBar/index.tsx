import SearchBar from '../SearchForm'
import { Header } from './styles'

interface TitleBarProps {
    searched: boolean
    onSearch: (city: string) => void
}

function TitleBar({ searched, onSearch }: TitleBarProps) {
    return (
        <Header>
            <div className="header-wrapper">
                <h1>AtmoCast</h1>
                {searched && (
                    <SearchBar parentComponent="TitleBar" onSearch={onSearch} />
                )}
            </div>
        </Header>
    )
}

export default TitleBar
