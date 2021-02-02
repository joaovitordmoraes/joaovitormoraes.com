import React from 'react'

import * as S from './styled'

import Button from '../Button'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ProjectItem = ({ client, tecnology, description, button, link }) => {

    const { projectImage } = useStaticQuery(
        graphql`
            query {
                projectImage: file(relativePath: {eq: "thumb-Leev.png"}) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )

    return(
        <S.ItemWrapper>
            <S.ItemImg>
                <Img fluid={projectImage.childImageSharp.fluid} alt="" />
            </S.ItemImg>

            <S.ItemContent>
                <S.ItemTitle>{client}</S.ItemTitle>
                <S.ItemTecnology>{tecnology}</S.ItemTecnology>
                <S.ItemDescription>
                    {description}
                </S.ItemDescription>

                <Button label={button} href={link} external/>
            </S.ItemContent>
        </S.ItemWrapper>
    )
}

export default ProjectItem