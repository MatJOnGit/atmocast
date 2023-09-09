import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SearchBlock, SearchInput, SearchBtn, BlueIcon } from './styles'

function SearchBar() {
    return (
        <SearchBlock>
            <SearchInput type="text" placeholder="Find a city" />
            <SearchBtn>
                <BlueIcon icon={faMagnifyingGlass} />
            </SearchBtn>
        </SearchBlock>
    )
}

export default SearchBar
