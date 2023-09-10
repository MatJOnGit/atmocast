import { useRef } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SearchForm, SearchInput, SearchBtn, ColoredIcon } from './styles'

interface SearchBarProps {
    parentComponent: string
    onSearch: (city: string) => void
}

function SearchBar({ parentComponent, onSearch }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    const iconColor = parentComponent === 'TitleBar' ? '#18a1f2' : '#ffffff'
    const fontColor = parentComponent === 'TitleBar' ? '#18a1f2' : '#ffffff'

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (inputRef.current) {
            const inputValue = inputRef.current.value
            onSearch(inputValue)
        }
    }

    return (
        <SearchForm onSubmit={handleSubmit}>
            <SearchInput
                type="text"
                placeholder="Find a city"
                color={fontColor}
                ref={inputRef}
                required
            />
            <SearchBtn type="submit">
                <ColoredIcon icon={faMagnifyingGlass} color={iconColor} />
            </SearchBtn>
        </SearchForm>
    )
}

export default SearchBar
