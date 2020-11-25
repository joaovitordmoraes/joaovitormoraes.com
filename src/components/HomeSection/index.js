import styled from 'styled-components'
import img from '../../../public/images/bg-portfolio.png'

export const HomeSection = styled.section`
    font-family: var(--font-krona);
    color: var(--color-white);
    text-align: center;
    background-image: url('${img}');
    background-repeat: no-repeat;
    background-position: center;
    height: 702px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: var(--size-xlarge);
        text-transform: uppercase;
    }

    h2 {
        font-size: var(--size-xmedium);
    }
`