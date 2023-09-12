import styled from 'styled-components'

export const NextDaysWeatherBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    width: 100%;
    height: 30vh;
    background-color: #ffffff;
    color: #006ab0;

    ul {
        width: 25%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
        font-size: 14px;
        margin: 0;
        padding: 0 5px;

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

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #000000;
        }
    }
`
