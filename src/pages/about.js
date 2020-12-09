import React from 'react'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import * as S from '../components/AboutWrapper'
import Avatar from '../components/Avatar'

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <S.AboutWrapper>
            <S.TextContent>
                <h1>Sobre mim</h1>
                <p>Trabalho na área de Desenvolvimento Front-End desde 2011 e desde então eu crio sites, landing pages e páginas interativas para eventos. Ultimamente tenho estudado muito sobre ReactJS, aplicando o que aprendo em alguns projetos pessoais.</p>

                <h2>Tecnologias com que trabalho</h2>
                <p>HTML | CSS | Scss | JavaScript | jQuery | PHP | Dot.Net</p>

                <div className="contact">
                    <a href="mailto:joaovitordmoraes@gmail.com">joaovitordmoraes@gmail.com</a> | <a href="tel:+5511943115208">(11) 9 4311.5208</a>
                </div>
            </S.TextContent>
            <Avatar />
        </S.AboutWrapper>
    </Layout>
)

export default AboutPage