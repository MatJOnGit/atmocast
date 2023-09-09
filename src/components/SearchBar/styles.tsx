import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SearchBlock = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const SearchInput = styled.input`
    padding-right: 22px;
    height: 22px;
    width: 120px;
    font-style: italic;
`

export const SearchBtn = styled.button`
    background-color: inherit;
    border: none;
`

export const BlueIcon = styled(FontAwesomeIcon)`
    color: #18a1f2;
    width: 22px;
    height: 22px;
`
