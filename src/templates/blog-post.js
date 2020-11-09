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
      text: { body },
      description: { description },
      publishDate,
    },
  },
}) => {
  return (
    <Layout>
      <Head title="Posts" />
      <Container fluid style={{ marginTop: "25px" }}>
        <h1>{title}</h1>
        <p>{publishDate}</p>
        <p> >>> To Be Updated! Stay tuned! </p>
      </Container>
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
