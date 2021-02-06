import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

  @media (max-width: 992px) {
    width: 100%;
    margin: 60px 0;
  }
`

export const Burger = styled.div`
  height: 20px;
  width: 30px;
  background-color: var(--color-one);
  z-index: 1;

  span,
  span::after,
  span::before {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #2a2a2a;
    outline: 1px solid transparent;
    transition: all 300ms linear;
  }

  span {
    &::before {
      top: -9px;
    }

    &::after {
      top: 9px;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
    }
  }
`
