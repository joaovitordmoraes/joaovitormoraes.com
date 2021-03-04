import styled from 'styled-components'
import { ButtonStyle } from '../Button/styled'

export const BlogWrapper = styled.section`
  max-width: 1520px;
  width: 100%;
  margin: 112px auto 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  ${ButtonStyle} {
    margin: 30px auto 0 auto;
  }

  @media (max-width: 1540px) {
    max-width: 1360px;
    margin-top: 75px;
  }

  @media (max-width: 424px) {
    margin-top: 40px;
  }
`

export const BlogItens = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`
