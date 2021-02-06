import React from 'react'

import * as S from './styled'

const Button = ({ label, href, external }) => {
  if (external) {
    return (
      <S.ExternalButtonStyle
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        external
      >
        {label}
      </S.ExternalButtonStyle>
    )
  } else {
    return <S.ButtonStyle to={href}>{label}</S.ButtonStyle>
  }
}

export default Button
