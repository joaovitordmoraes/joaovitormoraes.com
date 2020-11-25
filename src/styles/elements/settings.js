import { createGlobalStyle } from 'styled-components'

const Variables = createGlobalStyle`
    :root {

        --font-krona: 'Krona One', sans-serif;
        --font-open: 'Open Sans', sans-serif;
        
        --color-white: #ffffff;
        --color-one: #1C1C1C;
        --color-two: #777777;
        --color-three: #FF1EBC;
        --color-four: #00F8FF;
        --color-five: #ADFF92;

        --size-base: 10px;
        --size-xsmall: 2rem;
        --size-small: 2.2rem;
        --size-medium: 2.4rem;
        --size-xmedium: 3rem;
        --size-large: 7rem;
        --size-xlarge: 12rem;

        --size-one: 1.7rem;
        --size-two: 10rem;
    }
`

export default Variables