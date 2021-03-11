import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import * as S from '../components/Post/styled'
import ImgBg from '../images/bg-post.jpg'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <S.PostHeader>
        <S.PostHeaderWrapper>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
          <S.PostDate>
            {post.frontmatter.date} | Tempo de leitura: {post.timeToRead}min
          </S.PostDate>
        </S.PostHeaderWrapper>
      </S.PostHeader>

      <S.BgPost style={{ backgroundImage: `url(${ImgBg})` }} />

      <S.PostContent
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></S.PostContent>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "DD/MM/YYYY")
      }
      html
      timeToRead
    }
  }
`

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost
