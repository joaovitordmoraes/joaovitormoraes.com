import React from 'react'

import * as S from './styled'

import Img from '../../images/PortfolioJoao_Mockup_Leev.png'

const ProjectItem = () => {

    return(
        <S.ItemWrapper>
            <S.ItemImg>
                <img src={Img} alt="" />
            </S.ItemImg>

            <S.ItemContent>
                <S.ItemTitle>Leev</S.ItemTitle>
                <S.ItemTecnology>HTML | CSS3 | JavaScript | Wordpress</S.ItemTecnology>
                <S.ItemDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </S.ItemDescription>
            </S.ItemContent>
        </S.ItemWrapper>
    )
}

export default ProjectItem