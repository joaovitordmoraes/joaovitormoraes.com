import styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonStyle = styled(Link)`
    max-width: 222px;
    width: 100%;
    padding: 14px;
    box-sizing: border-box;
    border: 2px solid var(--color-two);
    font-family: var(--font-krona);
    font-size: var(--size-xsmall);
    color: var(--color-white);
    text-decoration: none;
    text-align: center;
    display: block;
    transition: all 150ms linear;

    &:hover {
        border: 2px solid var(--color-five);
        background-color: var(--color-five);
        color: var(--color-one);
        transition: all 150ms linear;
    }
`