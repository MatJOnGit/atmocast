import SearchBar from '../SearchForm'
import { Header, Title } from './styles'

interface TitleBarProps {
    searched: boolean
    onSearch: (city: string) => void
}

function TitleBar({ searched, onSearch }: TitleBarProps) {
    return (
        <Header>
            <Title>AtmoCast</Title>
            {searched && (
                <SearchBar parentComponent="TitleBar" onSearch={onSearch} />
            )}
        </Header>
    )
}

export default TitleBar
