import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'
import Thumb from '../../images/thumb-blog.png'

const BlogItem = ({ slug, title, description, date, timeToRead }) => {
  return (
    <S.LinkItem to={slug}>
      <S.ImageItem src={Thumb} alt="" />
      <S.LinkContent>
        <S.TitleItem>{title}</S.TitleItem>
        <S.DescriptionItem>{description}</S.DescriptionItem>
        <S.InfoItem>
          {date} | tempo de leitura: {timeToRead}min
        </S.InfoItem>
      </S.LinkContent>
    </S.LinkItem>
  )
}

BlogItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired
}

export default BlogItem
