import styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonStyle = styled(Link)`
    max-width: 222px;
    width: 100%;
    padding: 14px;
    box-sizing: border-box;
    border: 2px solid var(--color-two);
    font-family: var(--font-krona);
    font-size: var(--size-small);
    color: var(--color-white);
    text-decoration: none;
    text-align: center;
    display: block;
    transition: all 150ms linear;

    &:hover {
        border: 2px solid var(${props => props.external ? '--color-one' : '--color-five'});
        background-color: var(${props => props.external ? '--color-one' : '--color-five'});
        color: var(--color-one);
        transition: all 150ms linear;
    }
`

export const ExternalButtonStyle = styled.a`
    max-width: 222px;
    width: 100%;
    padding: 14px;
    box-sizing: border-box;
    border: 2px solid var(--color-two);
    font-family: var(--font-krona);
    font-size: var(--size-small);
    color: var(--color-white);
    text-decoration: none;
    text-align: center;
    display: block;
    transition: all 150ms linear;

    &:hover {
        border: 2px solid var(${props => props.external ? '--color-three' : '--color-five'});
        background-color: var(${props => props.external ? '--color-three' : '--color-five'});
        color: var(${props => props.external ? '--color-white' : '--color-one'});
        transition: all 150ms linear;
    }
`