import React from "react"
import Layout from "../layout/layout"
import Head from "../components/header"

import { PostContainer, TitleContainer } from "./blog-post.styles"

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
      <PostContainer>
        <TitleContainer>
          <h1>{title}</h1>
          <h5>{description}</h5>
          <p>{publishDate}</p>
        </TitleContainer>

        <div
          dangerouslySetInnerHTML={{
            __html: childMarkdownRemark.html,
          }}
        />
      </PostContainer>
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
