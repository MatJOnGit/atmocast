import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;

    .header-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 0 10px;
    }

    h1 {
        font-size: 32px;
        font-family: 'Oswald';
        color: #18a1f2;
        margin: 0;
    }

    @media (min-width: 768px) {
        height: 100px;

        .header-wrapper {
            padding: 0 30px;
        }

        h1 {
            font-size: 44px;
        }
    }

    @media (min-width: 1024px) {
        width: 100%;
        margin: 0 auto;

        .header-wrapper {
            max-width: 1240px;
            padding: 0;
        }

        h1,
        .search-bar-container {
            margin: 0 15px;
        }
    }
`
