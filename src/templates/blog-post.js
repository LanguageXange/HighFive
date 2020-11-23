import React from "react"
import Layout from "../layout/layout"
import Head from "../components/header"
import Container from "react-bootstrap/Container"

// continue from 3:06:44
// upload some images to contentful to test it out

const BlogPage = ({
  data: {
    contentfulBlogPost: {
      title,
      text: { body, childMarkdownRemark },
      description: { description },
      publishDate,
    },
  },
}) => {
  return (
    <Layout>
      <Head title="Posts" />

      <h1>{title}</h1>
      <p>{publishDate}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: childMarkdownRemark.html,
        }}
      />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      text: childContentfulBlogPostBodyTextNode {
        body
        childMarkdownRemark {
          html
        }
      }
      description {
        description
      }
      publishDate(formatString: "MMMM-DD-yy")
      title
    }
  }
`
