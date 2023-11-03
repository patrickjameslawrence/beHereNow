import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `BeHereNow`,
    siteUrl: `https://beherenow.netlify.app`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BeHereNow',
        short_name: 'BeHereNow',
        description: 'A geolocation based social media app',
        lang: 'en',
        start_url: '/',
        scope: '/',
        display: `${process.env.NODE_ENV === 'production' ? 'standalone' : 'browser'}`,
        theme_color: '#3b0764',
        background_color: '#3b0764',
        icon: 'src/images/favicon.svg',
        shortcuts: [
          {
            name: 'Create a new post on your feed',
            short_name: 'Create new post',
            description: 'Share a new post with BeHereNow',
            url: '/create-post',
            icons: [{ src: '/favicon.svg', sizes: '32x32' }],
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}

export default config
