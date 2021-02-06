import React from 'react'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import Slider from 'react-slick'
import * as S from '../components/ProjectsWrapper'
import ProjectItem from '../components/ProjectItem'

const ProjectsPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false
  }

  return (
    <Layout>
      <SEO title="Projetos" />

      <S.ProjectsWrapper>
        <S.GalleryStyle>
          <Slider {...settings}>
            <ProjectItem
              client="Leev"
              tecnology="HTML | CSS3 | JavaScript | Wordpress"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              button="Visite o site"
              link="https://leev-all.com/"
            />

            <ProjectItem
              client="Leev 2"
              tecnology="HTML | CSS3 | JavaScript | Wordpress"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              button="Visite o site"
              link="https://leev-all.com/"
            />

            <ProjectItem
              client="Leev 3"
              tecnology="HTML | CSS3 | JavaScript | Wordpress"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              button="Visite o site"
              link="https://leev-all.com/"
            />
          </Slider>
        </S.GalleryStyle>
      </S.ProjectsWrapper>
    </Layout>
  )
}

export default ProjectsPage
