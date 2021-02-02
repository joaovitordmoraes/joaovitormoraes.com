import styled from 'styled-components'

export const AboutWrapper = styled.section`
    max-width: 1520px;
    width: 100%;
    margin: 112px auto 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    picture {
        margin-left: 60px;
    }

    @media (max-width: 1540px) {
        max-width: 1360px;
        margin-top: 75px;
    }
`
export const TextContent = styled.div`
    max-width: 660px;
    width: 100%;
    color: var(--color-white);

    h1 {
        font-family: var(--font-krona);
        font-size: var(--size-large);
        margin-bottom: 25px;
    }

    h2 {
        font-family: var(--font-krona);
        font-size: var(--size-medium);
        margin-bottom: 10px;
    }

    p {
        font-family: var(--font-open);
        font-size: var(--size-medium);
        line-height: 1.6;
        margin-bottom: 32px;
    }

    .contact {
        font-family: var(--font-open);
        font-size: var(--size-medium);
        font-weight: 900;

        > a {
            color: var(--color-white);
            text-decoration: none;
            margin-left: 15px;

            &:not(:last-child) {
                margin-right: 15px;
                margin-left: 0;
            }
        }
    }
`