import React from 'react'

import * as S from './styled'
import Nav from '../Nav'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Nav />
      <S.Burger>
        <span></span>
      </S.Burger>
    </S.HeaderWrapper>
  )
}

export default Header
