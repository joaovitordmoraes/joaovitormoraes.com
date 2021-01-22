import styled from 'styled-components'

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ItemImg = styled.picture`
    max-width: 500px;

    > img {
        width: 100%;
    }
`

export const ItemContent = styled.div`

    h2 {
        margin-bottom: 28px;
    }

    h3 {
        margin-bottom: 15px;
    }

`

export const ItemTitle = styled.h2`
    font-family: var(--font-krona);
    font-size: var(--size-large);
    color: var(--color-white);
`

export const ItemTecnology = styled.h3`
    font-size: var(--size-medium);
    font-weight: 900;
    color: var(--color-white);
`

export const ItemDescription = styled.p`
    font-size: var(--size-xsmall);
    color: var(--color-white);
    line-height: 1.5;
`