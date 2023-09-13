import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    h1 {
        font-size: 32px;
        font-family: 'Oswald';
        color: #18a1f2;
        margin: 0;
    }

    @media (min-width: 768px) {
        padding: 0 30px;
        height: 100px;

        h1 {
            font-size: 44px;
        }
    }
`
