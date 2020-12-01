import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import * as S from "../components/HomeSection"
import { Scroll } from "../components/Scroll"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <S.HomeSection>
      <h1>João Vitor</h1>
      <h2>Desenvolvedor Front-End</h2>
    </S.HomeSection>
    <Scroll>scroll</Scroll>
  </Layout>
)

export default IndexPage
