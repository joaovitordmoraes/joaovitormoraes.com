import React from 'react'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import * as S from '../components/ProjectsWrapper'
import ProjectItem from '../components/ProjectItem'

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projetos" />

      <S.ProjectsWrapper>
        <S.GalleryStyle>
          <ProjectItem />
        </S.GalleryStyle>
      </S.ProjectsWrapper>
    </Layout>
  )
}

export default ProjectsPage
