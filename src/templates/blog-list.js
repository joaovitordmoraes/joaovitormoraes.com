import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import { BlogItens, BlogWrapper } from '../components/BlogWrapper'
import BlogItem from '../components/BlogItem'
import Pagination from '../components/Pagination'

const BlogList = (props) => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/page${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

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

        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
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
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default BlogList
