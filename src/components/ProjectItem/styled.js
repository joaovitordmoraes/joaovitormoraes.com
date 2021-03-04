import styled from 'styled-components'

export const ItemWrapper = styled.div`
  width: 100%;
  outline: 0;
`

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1210px) {
    flex-direction: column;
  }
`

export const ItemImg = styled.div`
  max-width: 500px;
  width: 100%;
  z-index: 2;

  > img {
    width: 100%;
  }

  @media (max-width: 1540px) {
    max-width: 500px;
  }

  @media (max-width: 1210px) {
    max-width: 332px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 67px;
      background-color: var(--color-three);
      top: 50%;
      left: 0;
      transform: translateY(-100%);
    }
  }
`

export const ItemContent = styled.div`
  max-width: 490px;
  position: relative;
  margin-left: 40px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    background-color: var(--color-three);
    width: calc(100% + 180px);
    height: 60px;
    left: 124px;
    top: -4px;
    z-index: -1;
    transform: translateX(calc(-100% - 40px));
  }

  h2 {
    margin-bottom: 28px;
  }

  h3 {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 25px;
  }

  @media (max-width: 1210px) {
    margin-left: 0;

    &::before {
      content: none;
    }

    h2 {
      font-size: var(--size-above-medium);
      text-align: center;
      margin-bottom: 10px;
    }

    h3 {
      text-align: center;
    }

    p {
      font-size: var(--size-small);
    }

    a {
      margin: 0 auto;
    }
  }

  @media (max-width: 576px) {
    h3 {
      font-size: var(--size-small);
      line-height: 1.5;
      margin-bottom: 20px;
    }

    p {
      display: none;
    }
  }
`

export const ItemTitle = styled.h2`
  font-family: var(--font-krona);
  font-size: var(--size-large);
  color: var(--color-white);
`

export const ItemTecnology = styled.h3`
  font-size: var(--size-medium);
  font-weight: 900;
  color: var(--color-white);
`

export const ItemDescription = styled.p`
  font-size: var(--size-small);
  color: var(--color-white);
  line-height: 1.5;
`
