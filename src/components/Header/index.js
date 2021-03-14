import React, { useState } from 'react'

import * as S from './styled'
import Nav from '../Nav'
import { useEffect } from 'react'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    let mounted = true

    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        if (mounted) {
          setScroll(true)
        }
      } else {
        setScroll(false)
      }
    })

    return () => (mounted = false)
  }, [setScroll])

  const handleClick = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <>
      <S.HeaderWrapper className={scroll ? '-floating' : ''}>
        <S.HeaderContainer>
          <Nav />
          <S.Burger>
            <input id="burger-menu" type="checkbox" />

            <label htmlFor="burger-menu" onClick={handleClick}>
              <div className="menu">
                <span className="burger"></span>
              </div>
            </label>
          </S.Burger>
        </S.HeaderContainer>
      </S.HeaderWrapper>

      <S.HiddenMenu className={activeMenu ? '-active' : ''}>
        <Nav />
      </S.HiddenMenu>
    </>
  )
}

export default Header
