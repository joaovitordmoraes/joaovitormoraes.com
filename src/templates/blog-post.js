import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import Comments from '../components/Comments'

import * as S from '../components/Post/styled'
import ImgBg from '../images/bg-post.jpg'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />

      <S.PostHeader>
        <S.PostHeaderWrapper>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
          <S.PostDate>
            {post.frontmatter.date} | Tempo de leitura: {post.timeToRead}min
          </S.PostDate>
        </S.PostHeaderWrapper>
      </S.PostHeader>

      <S.PostContentWrapper style={{ backgroundImage: `url(${ImgBg})` }}>
        <S.PostContent
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></S.PostContent>
      </S.PostContentWrapper>

      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "DD/MM/YYYY")
        image
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
