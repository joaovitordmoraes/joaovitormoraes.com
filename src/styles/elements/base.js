import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  html, body {
    font-family: var(--font-open);
    font-size: var(--size-base);
    background-color: var(--color-one);
  }

  body {
    padding-top: 146px;

    @media (max-width: 576px) {
      padding-top: 85px;
    }
  }

  .gatsby-plugin-transition-link-portal {
    width: 100%;
  }

  .tl-edges {
    min-height: 500px;
    width: 100% !important;
    overflow: hidden !important;
    overflow-y: hidden !important;
  }
`

export default Base
