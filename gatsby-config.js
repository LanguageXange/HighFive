const dotenv = require("dotenv")

// add images , react helmet

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}
const { spaceId, accessToken } = process.env

module.exports = {
  siteMetadata: {
    title: `HighFive👋`,
    author: `Cindy Lin`,
    description: `resources, blog posts about web development`,
  },
  plugins: [
    `gatsby-transformer-remark`, // this is for markdown file
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId,
        accessToken,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
  ],
}
