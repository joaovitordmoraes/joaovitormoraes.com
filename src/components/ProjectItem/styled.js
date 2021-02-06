import styled from 'styled-components'

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemImg = styled.div`
  max-width: 580px;
  width: 100%;
  z-index: 2;

  > img {
    width: 100%;
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
    width: calc(100% + 240px);
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
  font-size: var(--size-medium);
  color: var(--color-white);
  line-height: 1.5;
`
