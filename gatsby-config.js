module.exports = {
  siteMetadata: {
    title: `João Vitor`,
    description: `Trabalho na área de Desenvolvimento Front-End desde 2012 e desde então eu crio sites, landing pages e páginas interativas para eventos. Ultimamente tenho estudado muito sobre ReactJS, aplicando o que aprendo em alguns projetos pessoais.`,
    author: `@joaovitordmoraes`,
    siteUrl: `https://joaovitormoraes.netlify.app`
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    //needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-lazy-load`,
          //needs always to be the last on gatsby-transform-remark
          `gatsby-remark-prismjs`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `João Vitor Moraes`,
        short_name: `João Moraes`,
        start_url: `/`,
        background_color: `#1C1C1C`,
        theme_color: `#1C1C1C`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans`, `source sans pro\:300,400,400i,700`, `Krona One`],
        display: 'swap'
      }
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
}
