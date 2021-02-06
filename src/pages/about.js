import React from 'react'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import * as S from '../components/AboutWrapper'
import Avatar from '../components/Avatar'
import { graphql, useStaticQuery } from 'gatsby'

const AboutPage = () => {
  const {
    site: {
      siteMetadata: { description }
    }
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <S.AboutWrapper>
        <S.TextContent>
          <h1>Sobre mim</h1>
          <p>{description}</p>

          <h2>Tecnologias com que trabalho</h2>
          <p>HTML | CSS | Scss | JavaScript | jQuery | PHP | Asp.Net</p>

          <div className="contact">
            <a href="mailto:joaovitordmoraes@gmail.com">
              joaovitordmoraes@gmail.com
            </a>{' '}
            | <a href="tel:+5511943115208">(11) 9 4311.5208</a>
          </div>
        </S.TextContent>
        <Avatar />
      </S.AboutWrapper>
    </Layout>
  )
}

export default AboutPage
