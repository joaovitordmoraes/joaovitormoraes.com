import styled from 'styled-components'
import img from '../../images/bg-portfolio.png'

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
  margin-bottom: 30px;

  h1 {
    font-size: var(--size-xlarge);
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  h2 {
    font-size: var(--size-xmedium);
  }

  @media (max-width: 1540px) {
    height: 500px;
    background-size: contain;
  }

  @media (max-width: 576px) {
    height: auto;
    padding: 80px 0;

    h1 {
      font-size: var(--size-big);
    }

    h2 {
      font-size: var(--size-medium);
    }
  }
`
