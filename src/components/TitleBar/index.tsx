import SearchBar from './../SearchBar'
import { Header, Title } from './styles'

interface SearchedCityProps {
    searched: boolean
}

function TitleBar({ searched }: SearchedCityProps) {
    return (
        <Header>
            <Title>AtmoCast</Title>
            {searched && <SearchBar parentComponent="TitleBar" />}
        </Header>
    )
}

export default TitleBar
