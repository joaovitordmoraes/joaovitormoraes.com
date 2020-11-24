import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
    html, body {
        font-family: var(--font-open);
        font-size: var(--size-base);
        background-color: var(--color-one);
    }
`

export default Base