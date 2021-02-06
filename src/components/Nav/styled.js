import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav`
  background-color: var(--color-one);
  padding-left: 52px;
  z-index: 1;
`

export const MenuLinksList = styled.ul`
  font-family: var(--font-krona);
  font-size: var(--size-small);
  display: flex;
`

export const MenuLinksItem = styled.li`
  &:not(:last-child) {
    margin-right: 35px;
  }
`

export const MenuLinksLink = styled(Link)`
  color: var(--color-two);
  text-decoration: none;
  transition: 150ms;

  &:hover {
    color: var(--color-white);
    transition: 150ms;
  }

  &.active {
    color: var(--color-white);
  }
`
