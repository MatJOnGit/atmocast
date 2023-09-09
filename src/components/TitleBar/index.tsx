import SearchBar from './../SearchBar'
import { Header, Title } from './styles'

interface TitleBarProps {
    searched: boolean
}

function TitleBar({ searched }: TitleBarProps) {
    return (
        <Header>
            <Title>AtmoCast</Title>
            {searched && <SearchBar />}
        </Header>
    )
}

export default TitleBar
