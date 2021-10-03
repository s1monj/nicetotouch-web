module.exports = {
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  siteMetadata: {
    title: `generative art, nfts, music, video & photo`,
    description: ``,
    author: `nicetotouch.eth`,
    siteUrl: `https://nicetotouch.eth.link/`,
    keywords: [
      "Generative Art",
      "NFT",
      "Music",
      "Video",
      "Photo"
    ],
    social: {
      github: `https://github.com/s1monj`,
      soundcloud: `https://soundcloud.com/nice-to-touch`,
      vimeo: `https://vimeo.com/nicetotouch`,
      formspree: ''
    },
    image: 'images/nicetotouch-logo.png',
  },
  plugins: [
    'gatsby-plugin-ipfs',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nice to touch`,
        short_name: `nice to touch`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/nicetotouch-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-highlight-code`,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<GA Code>",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`
  ],
}
