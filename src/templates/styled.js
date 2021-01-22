import styled from 'styled-components'
import Element01 from '../images/element-post-01.svg'
import Element02 from '../images/element-post-02.svg'

export const PostHeader = styled.section`
    max-width: 1520px;
    width: 100%;
    padding: 45px 20px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        background-image: url('${Element01}');
        background-size: contain;
        background-repeat: no-repeat;
        width: 100px;
        height: 144px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    &::after {
        content: '';
        position: absolute;
        background-image: url('${Element02}');
        background-size: contain;
        background-repeat: no-repeat;
        right: 0;
        bottom: -8px;
        width: 60px;
        height: 136px;
    }

    @media (max-width: 1540px) {
        max-width: 1360px;
    }
`

export const PostHeaderWrapper = styled.div`
    max-width: 880px;
    width: 100%;
`

export const PostTitle = styled.h1`
    font-family: var(--font-krona);
    font-size: var(--size-large);
    color: var(--color-white);
    line-height: 1.2;
    margin-bottom: 10px;
`

export const PostDescription = styled.p`
   font-size: var(--size-xmedium);
   color: var(--color-white);
   margin-bottom: 30px;
`

export const PostDate = styled.p`
    font-size: var(--size-small);
    font-style: italic;
    color: var(--color-white);
`

export const BgPost = styled.div`
    max-width: 1920px;
    width: 100%;
    height: 630px;
    background-size: cover;
    background-position: center bottom;
`

export const PostContent = styled.article`
    max-width: 880px;
    width: 100%;
    font-size: var(--size-xsmall);
    color: var(--color-white);
    line-height: 1.5;
    margin: 0 auto;
    transform: translateY(-300px);
`