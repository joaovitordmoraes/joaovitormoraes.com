import styled from 'styled-components'

export const Burger = styled.div`
  display: none;

  .menu {
    background-color: transparent;
    z-index: 4;
    position: relative;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    box-shadow: 0 0 0 0 #383838, 0 0 0 0 #383838;
    transition: box-shadow 1s ease-in-out;
  }

  input {
    display: none;

    &:checked ~ label {
      .burger {
        transform: rotate(45deg);

        &::before {
          top: 0px;
          transform: rotate(90deg);
        }

        &::after {
          bottom: 0px;
          transform: rotate(90deg);
        }
      }

      .menu {
        box-shadow: 0 0 0 130vw #383838, 0 0 0 130vh #383838;
      }
    }
  }

  label {
    display: block;
    height: 100%;
    cursor: pointer;
  }

  .burger {
    display: block;
    background-color: var(--color-two);
    width: 30px;
    height: 2px;
    top: 20px;
    left: 6px;
    position: relative;
    transition: 0.5s ease-in-out;

    &::before,
    &::after {
      content: '';
      background-color: var(--color-two);
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.5s ease-in-out;
    }

    &::before {
      top: -10px;
    }

    &::after {
      bottom: -10px;
    }
  }
`

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: var(--color-one);
  padding: 90px 20px 40px 20px;
  box-sizing: border-box;
  transition: padding 150ms linear;
  min-height: 126px;

  &.-floating {
    transition: padding 150ms linear;
    box-shadow: 0 3px 4px var(--color-shadow);
    padding: 40px 20px;
    min-height: 96px;
  }

  @media (max-width: 1540px) {
    padding-top: 70px;
  }

  @media (max-width: 992px) {
    padding-top: 45px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1520px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    width: calc(100% - 40px);
    height: 1px;
    background-color: var(--color-two);
  }

  @media (max-width: 1540px) {
    max-width: 1360px;

    ${Burger} {
      display: none;
    }
  }

  @media (max-width: 992px) {
    width: 100%;

    &::before {
      width: calc(100% - 100px);
    }

    > nav {
      display: none;
    }

    ${Burger} {
      display: block;
    }
  }
`

export const HiddenMenu = styled.div`
  position: fixed;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-5000%, -50%);
  opacity: 0;
  transition: opacity 200ms linear;

  &.-active {
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: opacity 200ms 0.5s linear;
  }

  > nav {
    padding: 0;
    background-color: transparent;

    ul {
      flex-direction: column;
      align-items: center;
      font-size: var(--size-xmedium);

      li {
        padding: 38px 0;
        max-width: 250px;
        width: 100%;
        text-align: center;

        &:first-child {
          padding: 0 0 38px 0;
        }

        &:last-child {
          padding: 38px 0 0 0;
        }

        &:not(:last-child) {
          margin-right: 0;
          border-bottom: 1.5px solid var(--color-two);
        }
      }
    }
  }
`
