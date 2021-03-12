import styled from 'styled-components'

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;

  iframe[src*='ads-iframe'] {
    display: none;
  }

  #disqus_thred {
    a {
      color: var(--color-one) !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color: var(--color-white);
  font-size: var(--size-xmedium);
  font-weight: 700;
  padding-bottom: 2rem;
`
