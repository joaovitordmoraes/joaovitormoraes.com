import React from 'react'

import * as S from './styled'
import Nav from '../Nav'
import Logo from '../Logo'

const Header = () => {

    return(
        <S.HeaderWrapper>
            <Logo />
            <Nav />
        </S.HeaderWrapper>
    );
}

export default Header