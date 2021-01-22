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
    };

    return(
        <Layout>
            <SEO title="Projetos" />

            <S.ProjectsWrapper>

                <S.GalleryStyle>
                    <Slider {...settings}>
                        <ProjectItem />
                    </Slider>
                </S.GalleryStyle>

            </S.ProjectsWrapper>
            
            
        </Layout>
    )
}

export default ProjectsPage