import SearchBar from '../SearchForm'
import { Header } from './styles'

interface TitleBarProps {
    searched: boolean
    onSearch: (city: string) => void
}

function TitleBar({ searched, onSearch }: TitleBarProps) {
    return (
        <Header>
            <h1>AtmoCast</h1>
            {searched && (
                <SearchBar parentComponent="TitleBar" onSearch={onSearch} />
            )}
        </Header>
    )
}

export default TitleBar
