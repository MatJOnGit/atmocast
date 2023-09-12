import styled from 'styled-components'

export const NextDaysWeatherBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    width: 100%;
    height: 20vh;
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
`
