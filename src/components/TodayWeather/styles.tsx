import styled from 'styled-components'

export const TodayWeatherBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    .weather-info,
    .weather-icon {
        background: linear-gradient(135deg, #006ab0, #1fa4f1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .weather-info {
        width: 65%;
        height: calc(100vh - 30vh - 60px);
        list-style: none;
        flex-direction: column;
        margin: 0;
        padding: 0;

        & li {
            margin: 3px 0;
        }

        & img {
            margin-right: 10px;
        }
    }

    .splitter {
        display: block;
        height: 1px;
        width: 65%;
        background-color: #d3d3d3;
        margin: 10px 0;
    }

    .centered {
        display: flex;
        align-items: center;
    }

    .small-icon {
        width: 35px;
        height: 35px;
    }

    .weather-icon {
        width: 35%;
    }

    .big-icon {
        width: 100px;
        heihgt: 100px;
    }

    @media (min-width: 768px) {
        .small-icon {
            width: 50px;
            height: 50px;
        }

        .big-icon {
            width: 140px;
            heihgt: 140px;
        }

        .weather-info li {
            margin: 5px 0;
        }
    }
`
