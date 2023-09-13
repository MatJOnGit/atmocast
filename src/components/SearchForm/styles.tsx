import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SearchFormBlock = styled.form<{ parentComponent?: string }>`
    display: flex;
    flex-direction: row;
    margin-top: ${(props) =>
        props.parentComponent === 'Intro' ? '18px' : '0'};

    .search-btn {
        background-color: inherit;
        border: none;
    }

    @media (min-width: 768px) {
        .search-icon {
            font-size: 22px;
        }
    }
`

export const SearchInput = styled.input<{ parentComponent?: string }>`
    font-style: italic;
    background-color: inherit;
    border: 0;
    font-size: 14px;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid
        ${(props) =>
            props.parentComponent === 'TitleBar' ? '#18a1f2' : '#ffffff'};
    color: ${(props) =>
        props.parentComponent === 'TitleBar' ? '#18a1f2' : '#ffffff'};

    &::placeholder {
        font-size: 14px;
        color: ${(props) =>
            props.parentComponent === 'TitleBar' ? '#18a1f2' : '#ffffff'};
    }

    @media (min-width: 768px) {
        font-size: 22px;

        &::placeholder {
            font-size: 22px;
        }
    }
`

export const SearchIcon = styled(FontAwesomeIcon)<{ parentComponent?: string }>`
    font-size: 18px;
    color: ${(props) =>
        props.parentComponent === 'TitleBar' ? '#18a1f2' : '#ffffff'};
`
