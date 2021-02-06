import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'
import Thumb from '../../images/thumb-blog.jpg'

const BlogItem = ({ slug, title, description }) => {
  return (
    <S.LinkItem to={slug}>
      <S.Item style={{ backgroundImage: `url(${Thumb})` }}>
        <S.TitleItem>{title}</S.TitleItem>

        <S.DescriptionItem>{description}</S.DescriptionItem>
      </S.Item>
    </S.LinkItem>
  )
}

BlogItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default BlogItem
