import styled from 'styled-components'

export const IntroBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 15px;
    height: calc(100vh - 60px);
    background: linear-gradient(135deg, #006ab0, #1fa4f1);

    p {
        font-size: 16px;
        text-align: justify;
        color: #ffffff;
    }

    @media (min-width: 768px) {
        padding: 15px 30px;
        height: calc(100vh - 100px);

        p {
            font-size: 22px;
        }
    }
`
