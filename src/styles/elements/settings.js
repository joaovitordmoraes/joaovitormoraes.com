import { createGlobalStyle } from 'styled-components'

const Variables = createGlobalStyle`
    :root {

        --font-krona: 'Krona One', sans-serif;
        --font-open: 'Open Sans', sans-serif;
        
        --color-black: #000000;
        --color-shadow: rgba(0, 0, 0, 0.5);
        --color-white: #ffffff;
        --color-one: #1C1C1C;
        --color-two: #777777;
        --color-three: #FF1EBC;
        --color-four: #00F8FF;
        --color-five: #ADFF92;

        --color-gradient-01: #1B2324;
        --color-gradient-02: #18393A;
        --color-gradient-03: #135C5E;

        --size-base: 10px;
        --size-xsmall: 1.2rem;
        --size-small: 1.6rem;
        --size-medium: 1.8rem;
        --size-xmedium: 2rem;
        --size-above-medium: 3rem;
        --size-large: 5rem;
        --size-big: 6.4rem;
        --size-xlarge: 10rem;
    }
`

export default Variables
