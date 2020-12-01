import React from 'react'

import * as S from './styled'
import imgAvatar from '../../../public/images/avatar.jpg'

const Avatar = () => (
    <S.AvatarSection>
        <img src={imgAvatar} alt="" />
    </S.AvatarSection>
)

export default Avatar