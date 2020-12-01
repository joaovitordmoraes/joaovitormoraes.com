import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1520px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    margin: 90px auto 40px auto;

    &::before {
        content: '';
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        width: calc(100% - 40px);
        height: 1px;
        background-color: var(--color-two);
    }

    @media (max-width: 1540px) {
        max-width: 1360px;
        margin-top: 70px;
    }
`