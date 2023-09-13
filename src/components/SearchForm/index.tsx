import { useRef } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SearchFormBlock, SearchInput, SearchIcon } from './styles'

interface SearchBarProps {
    parentComponent: 'Intro' | 'TitleBar'
    onSearch: (city: string) => void
}

function SearchBar({ parentComponent, onSearch }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (inputRef.current) {
            const inputValue = inputRef.current.value
            onSearch(inputValue)
        }
    }

    return (
        <SearchFormBlock
            className="search-form"
            onSubmit={handleSubmit}
            parentComponent={parentComponent}
        >
            <SearchInput
                className="search-input"
                type="text"
                placeholder="Find a city"
                ref={inputRef}
                parentComponent={parentComponent}
                required
            />
            <button className="search-btn" type="submit">
                <SearchIcon
                    className="search-icon"
                    icon={faMagnifyingGlass}
                    parentComponent={parentComponent}
                />
            </button>
        </SearchFormBlock>
    )
}

export default SearchBar
