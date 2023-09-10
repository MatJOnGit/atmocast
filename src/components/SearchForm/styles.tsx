import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
`

export const SearchInput = styled.input<{ color: string }>`
    padding-right: 22px;
    height: 22px;
    width: 120px;
    font-style: italic;
    background-color: inherit;
    border: 0;
    border-bottom: 1px solid ${(props) => props.color};
    color: ${(props) => props.color};

    &::placeholder {
        color: ${(props) => props.color};
    }
`

export const SearchBtn = styled.button`
    background-color: inherit;
    border: none;
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 18px;
`

export const ColoredIcon = styled(Icon)<{ color: string }>`
    color: ${(props) => props.color};
`
