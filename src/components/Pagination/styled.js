import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--size-small);
  color: var(--color-two);
  width: 100px;
  margin: 0 auto;
  position: relative;

  img {
    position: absolute;
    top: 0;
  }
`

export const Current = styled.span`
  font-weight: bold;
  color: var(--color-five);
`

export const Total = styled.span`
  font-weight: bold;
`

export const Prev = styled.img`
  height: 15px;
  transform: rotate(-180deg);
  left: 0;
`

export const Next = styled.img`
  height: 15px;
  right: 0;
`
