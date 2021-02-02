import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import { BlogItens, BlogWrapper } from '../components/BlogWrapper'
import BlogItem from '../components/BlogItem'
import Button from '../components/Button'


const BlogPage = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query PostList {
                allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                description
                            }
                        }
                    }
                }
            }
          
        `
    )

    const postList = allMarkdownRemark.edges

    return(
        <Layout>
            <SEO title="Blog" />
            
            <BlogWrapper>
                <BlogItens>
                    {postList.map(({
                        node: {
                            frontmatter: {title, description},
                            fields: {slug}
                        },
                    }) => (
                        <BlogItem
                            slug={slug}
                            title={title}
                            description={description}
                        />
                    ))}
                </BlogItens>

                <Button label="Leia mais" href="/" />
            </BlogWrapper>
        </Layout>
    )
}

export default BlogPage