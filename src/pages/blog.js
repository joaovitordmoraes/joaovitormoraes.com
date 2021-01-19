import React from 'react'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import { BlogItens, BlogWrapper } from '../components/BlogWrapper'
import BlogItem from '../components/BlogItem'
import Button from '../components/Button'

const BlogPage = () => (
    <Layout>
        <SEO title="Blog" />
        
        <BlogWrapper>
            <BlogItens>
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </BlogItens>

            <Button label="Leia mais" />
        </BlogWrapper>
    </Layout>
)

export default BlogPage