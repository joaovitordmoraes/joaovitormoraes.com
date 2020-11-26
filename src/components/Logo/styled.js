import styled from 'styled-components'
import { Link } from 'gatsby'

export const LogoLink = styled(Link)`
    font-family: var(--font-krona);
    font-size: var(--size-xsmall);
    color: var(--color-two);
    text-decoration: none;
    background-color: var(--color-one);
    padding-right: 52px;
    z-index: 1;
    opacity: 1;
    transition: opacity 300ms linear;

    &.hidden {
        transition: opacity 300ms linear;
        opacity: 0;
        visibility: hidden;
        z-index: -1;
    }
`