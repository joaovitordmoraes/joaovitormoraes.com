import styled from 'styled-components'
import Element from '../../images/element-sobre.svg'
import Img from 'gatsby-image'

export const ImageAvatar = styled(Img)`
  max-width: 508px;
  max-height: 597px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

export const AvatarSection = styled.picture`
  position: relative;
  width: 100%;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 365px;
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
    left: -32px;
    bottom: -55px;
    background-image: url(${Element});
    background-size: contain;
    background-repeat: no-repeat;
    width: 368px;
    height: 114px;
  }

  @media (max-width: 1540px) {
    &::before {
      height: 280px;
    }

    &::after {
      width: 270px;
      height: 84px;
    }

    ${ImageAvatar} {
      max-width: 400px;
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
