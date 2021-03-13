import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import React from 'react'
import Arrow from '../../images/arrow.svg'

import * as S from './styled'

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage
}) => {
  return (
    <S.PaginationWrapper>
      {!isFirst && (
        <AniLink
          to={prevPage}
          cover
          direction="left"
          bg="#1C1C1C"
          duration={0.6}
        >
          <S.Prev src={Arrow} alt="" />
        </AniLink>
      )}
      <p>
        <S.Current>{currentPage}</S.Current> de <S.Total>{numPages}</S.Total>
      </p>
      {!isLast && (
        <AniLink
          to={nextPage}
          cover
          direction="right"
          bg="#1C1C1C"
          duration={0.6}
        >
          <S.Next src={Arrow} alt="" />
        </AniLink>
      )}
    </S.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string
}

export default Pagination
