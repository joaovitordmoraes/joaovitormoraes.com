import { Link } from 'gatsby'
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
        <Link to={prevPage}>
          <S.Prev src={Arrow} alt="" />
        </Link>
      )}
      <p>
        <S.Current>{currentPage}</S.Current> de <S.Total>{numPages}</S.Total>
      </p>
      {!isLast && (
        <Link to={nextPage}>
          <S.Next src={Arrow} alt="" />
        </Link>
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
