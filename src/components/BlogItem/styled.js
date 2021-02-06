import styled from 'styled-components'
import { Link } from 'gatsby'

export const Item = styled.div`
  max-width: 450px;
  width: 100%;
  height: 495px;
  padding: 40px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--color-white);
  border: 2px solid var(--color-one);
  transition: all 200ms linear;

  &:hover {
    border: 2px solid var(--color-five);
    transition: all 200ms linear;
  }

  @media (max-width: 1540px) {
    max-width: 400px;
    height: 445px;
  }
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const TitleItem = styled.h2`
  font-family: var(--font-krona);
  font-size: var(--size-xmedium);
  line-height: 1.3;
  margin-bottom: 10px;
`

export const DescriptionItem = styled.p`
  font-size: var(--size-medium);
  line-height: 1.3;
`
