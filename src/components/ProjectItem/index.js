import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'

import * as S from './styled'

import Button from '../Button'

const ProjectItem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    customPaging: function (i) {
      return <div>teste</div>
    }
  }

  const data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            id
            client
            tecnology
            description
            button
            link
            images {
              src {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allDataJson.edges

  return (
    <Slider {...settings}>
      {projects.map((item) => (
        <S.ItemWrapper key={item.node.id}>
          <S.Cell>
            <S.ItemImg>
              <Img fluid={item.node.images.src.childImageSharp.fluid} alt="" />
            </S.ItemImg>

            <S.ItemContent>
              <S.ItemTitle>{item.node.client}</S.ItemTitle>
              <S.ItemTecnology>{item.node.tecnology}</S.ItemTecnology>
              <S.ItemDescription>{item.node.description}</S.ItemDescription>

              <Button label={item.node.button} href={item.node.link} external />
            </S.ItemContent>
          </S.Cell>
        </S.ItemWrapper>
      ))}
    </Slider>
  )
}

export default ProjectItem
