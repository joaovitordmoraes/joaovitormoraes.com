import styled from 'styled-components'
import Element from '../../../public/images/element-sobre.svg'

export const AvatarSection = styled.picture`
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        width: calc(100% + 224px);
        height: 365px;
        background: var(--color-one);
        background: linear-gradient(0deg, var(--color-one) 0%, var(--color-gradient-01) 10%, var(--color-gradient-02) 27%, var(--color-gradient-03) 46%, var(--color-four) 100%);
        left: -112px;
        top: 50%;
        transform: translateY(-50%);
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

        > img {
            max-width: 400px;
        }
    }
`