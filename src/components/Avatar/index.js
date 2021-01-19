import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: {eq: "avatar.jpg"}) {
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
        <>
        <S.AvatarSection>
            <S.ImageAvatar fluid={avatarImage.childImageSharp.fluid} alt="" />
        </S.AvatarSection>
        </>
    )

    
}

export default Avatar