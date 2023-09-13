import styled from 'styled-components'

export const IntroBlock = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    padding: 0 15px;
    display: flex;
    justify-content: center;

    .intro-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        padding: 0 10px;
        background: linear-gradient(135deg, #006ab0, #1fa4f1);
    }

    p {
        text-align: justify;
        color: #ffffff;
    }

    @media (min-width: 768px) {
        height: calc(100vh - 100px);

        .intro-wrapper {
            padding: 0 30px;
        }
    }

    @media (min-width: 1024px) {
        margin: 0 auto;

        .intro-wrapper {
            max-width: 1240px;
        }
    }
`
