import styled from 'styled-components'
import { Link } from 'gatsby'

export const LinkItem = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  display: flex;
  width: 100%;
  padding: 50px 70px;
  border: 1px solid transparent;
  transition: border 150ms linear;
  box-sizing: border-box;

  &:hover {
    border: 1px solid var(--color-five);
    transition: border 150ms linear;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    max-width: 500px;
    padding: 0;
    margin-bottom: 50px;

    &:not(:last-child) {
      padding-bottom: 50px;
      border-bottom: 1px solid var(--color-five);
    }
  }
`

export const ImageItem = styled.img`
  max-width: max-content;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`

export const TitleItem = styled.h2`
  font-family: var(--font-krona);
  font-size: var(--size-above-medium);
  line-height: 1.3;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: var(--size-xmedium);
  }
`

export const DescriptionItem = styled.p`
  font-size: var(--size-medium);
  line-height: 1.3;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: var(--size-small);
  }
`

export const InfoItem = styled.p`
  font-size: var(--size-small);
  font-style: italic;
  font-weight: 100;

  @media (max-width: 1024px) {
    font-size: var(--size-xsmall);
  }
`

export const LinkContent = styled.div`
  margin-left: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`
