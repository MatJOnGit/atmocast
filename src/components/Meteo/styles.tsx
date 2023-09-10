import styled from 'styled-components'

export const MeteoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: calc(100vh - 60px);
    color: #ffffff;
    font-size: 18px;

    .today-data-block,
    .next-days-weather {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .weather-info,
    .weather-icon {
        background: linear-gradient(135deg, #006ab0, #1fa4f1);
        height: calc(100vh - 20vh - 60px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .weather-info {
        width: 65%;
    }

    .weather-icon {
        width: 35%;
    }

    .next-days-weather {
        width: 100%;
        height: 20vh;
        display: flex;
        flex-direction: row;
        background-color: #ffffff;
        color: #006ab0;

        div {
            width: 25%;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &::after {
                content: '';
                position: absolute;
                right: 0;
                top: 10%;
                bottom: 10%;
                width: 1px;
                background-color: #d3d3d3;
            }

            &:last-child {
                &::after {
                    display: none;
                }
            }
        }
    }
`