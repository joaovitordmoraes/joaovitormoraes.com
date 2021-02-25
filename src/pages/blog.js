import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import { BlogItens, BlogWrapper } from '../components/BlogWrapper'
import BlogItem from '../components/BlogItem'

const BlogPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
  )

  const postList = allMarkdownRemark.edges

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

export default BlogPage
