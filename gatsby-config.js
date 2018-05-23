module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog Cosmic JS',
    author: 'Jazib Sawar',
    description: 'A blog demonstrating what you can do using Cosmic JS & Gatsby.',
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: 'vue-blog-cosmicjs',
        objectTypes: ['posts'],
        apiAccess: {
          read_key: 'HOqPEF2pOu5j3rCrObqfptXrr7CbPXb6sFq7f1XNjsU8rGjORB',
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
