import React from "react"
import Layout from "../layout/layout"

// continue from 3:06:44
// upload some images to contentful to test it out

const BlogPage = ({
  data: {
    contentfulBlogPost: {
      title,
      text: { body },
      description: { description },
      publishDate,
    },
  },
}) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishDate}</p>
      <h2>{description}</h2>
      <p>{body}</p>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      text: childContentfulBlogPostBodyTextNode {
        body
      }
      description {
        description
      }
      publishDate(formatString: "MMMM-DD-yy")
      title
    }
  }
`
