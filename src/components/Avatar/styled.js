import styled from 'styled-components'
import Element from '../../images/element-sobre.svg'
import Img from 'gatsby-image'

export const ImageAvatar = styled(Img)`
  max-width: 400px;
  max-height: 470px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

export const AvatarSection = styled.picture`
  position: relative;
  width: 100%;
  max-width: 600px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 300px;
    background: var(--color-one);
    background: linear-gradient(
      0deg,
      var(--color-one) 0%,
      var(--color-gradient-01) 10%,
      var(--color-gradient-02) 27%,
      var(--color-gradient-03) 46%,
      var(--color-four) 100%
    );
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 60px;
    bottom: -30px;
    background-image: url(${Element});
    background-size: contain;
    background-repeat: no-repeat;
    width: 280px;
    height: 88px;
  }

  @media (max-width: 1540px) {
    max-width: 480px;

    &::before {
      height: 280px;
    }

    &::after {
      width: 200px;
      height: 64px;
      left: 46px;
      bottom: -20px;
    }

    ${ImageAvatar} {
      max-width: 330px;
      max-height: 100%;
    }
  }

  @media (max-width: 992px) {
    &::before {
      height: 174px;
      max-width: 350px;
      width: 100%;
    }

    &::after {
      width: 165px;
      height: 52px;
      left: 50%;
      transform: translateX(calc(-50% - 50px));
      bottom: -15px;
    }

    ${ImageAvatar} {
      max-width: 242px;
    }
  }
`
