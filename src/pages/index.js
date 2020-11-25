import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import * as S from "../components/HomeSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <S.HomeSection>
      <h1>João Vitor</h1>
      <h2>Desenvolvedor Front-End</h2>
    </S.HomeSection>
  </Layout>
)

export default IndexPage
