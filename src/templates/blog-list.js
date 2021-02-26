import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import { BlogItens, BlogWrapper } from '../components/BlogWrapper'
import BlogItem from '../components/BlogItem'

const BlogList = (props) => {
  const postList = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />

      <BlogWrapper>
        <BlogItens>
          {postList.map(
            ({
              node: {
                frontmatter: { title, description, date },
                fields: { slug },
                id,
                timeToRead
              }
            }) => (
              <BlogItem
                key={id}
                slug={slug}
                title={title}
                description={description}
                date={date}
                timeToRead={timeToRead}
              />
            )
          )}
        </BlogItens>
      </BlogWrapper>
    </Layout>
  )
}

export const query = graphql`
  query postList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(locale: "pt-BR", formatString: "DD/MM/YYYY")
          }
          id
          timeToRead
        }
      }
    }
  }
`

BlogList.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogList
