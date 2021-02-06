import styled from 'styled-components'

export const Scroll = styled.div`
  font-family: var(--font-krona);
  font-size: var(--size-xsmall);
  color: var(--color-two);
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5px;
    height: 20px;
    background-color: var(--color-two);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5px;
    height: 20px;
    background-color: var(--color-two);
  }

  @media (max-width: 1540px) {
    font-size: var(--size-one);
  }
`
