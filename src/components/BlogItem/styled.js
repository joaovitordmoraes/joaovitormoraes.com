import styled from 'styled-components'

export const Item = styled.div`
    max-width: 450px;
    width: 100%;
    height: 495px;
    padding: 40px 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: var(--color-white);
    border: 2px solid var(--color-one);
    transition: all 200ms linear;

    &:hover {
        border: 2px solid var(--color-five);
        transition: all 200ms linear;
    }

    h2 {
        font-family: var(--font-krona);
        font-size: var(--size-xmedium);
        line-height: 36px;
        margin-bottom: 10px;
    }

    p {
        font-size: var(--size-xsmall);
        line-height: 26px;
    }

    @media (max-width: 1540px) {
        max-width: 400px;
        height: 445px;
    }
`