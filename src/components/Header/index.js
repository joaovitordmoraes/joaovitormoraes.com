import React, { useState } from 'react'

import * as S from './styled'
import Nav from '../Nav'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  console.log(activeMenu)

  const handleClick = () => {
    setActiveMenu(!activeMenu)
    console.log(activeMenu)
  }

  return (
    <>
      <S.HeaderWrapper>
        <Nav />
        <S.Burger>
          <input id="burger-menu" type="checkbox" />

          <label htmlFor="burger-menu" onClick={handleClick}>
            <div className="menu">
              <span className="burger"></span>
            </div>
          </label>
        </S.Burger>
      </S.HeaderWrapper>

      <S.HiddenMenu className={activeMenu ? '-active' : ''}>
        <Nav />
      </S.HiddenMenu>
    </>
  )
}

export default Header
