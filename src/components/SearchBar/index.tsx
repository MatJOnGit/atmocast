import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SearchBlock, SearchInput, SearchBtn, ColoredIcon } from './styles'

interface SearchBarProps {
    parentComponent: string
}

function SearchBar({ parentComponent }: SearchBarProps) {
    const iconColor = parentComponent === 'TitleBar' ? '#18a1f2' : '#ffffff'
    const fontColor = parentComponent === 'TitleBar' ? '#18a1f2' : '#ffffff'

    return (
        <SearchBlock>
            <SearchInput
                type="text"
                placeholder="Find a city"
                color={fontColor}
            />
            <SearchBtn>
                <ColoredIcon icon={faMagnifyingGlass} color={iconColor} />
            </SearchBtn>
        </SearchBlock>
    )
}

export default SearchBar
