import React from 'react'

import * as S from './styled'
import Thumb from '../../images/thumb-blog.jpg'

const BlogItem = () => {
    
    return(
        <S.Item style={{ backgroundImage: `url(${Thumb})` }}>
            <h2>Lorem ipsum dolor sit amet,</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </S.Item>
    )
}

export default BlogItem