import React from "react"
import Layout from "../layout/layout"
import { graphql } from "gatsby"

// to-do: create a template
// image plugin
const Blog = ({ data }) => {
  const edge = data.allContentfulBlogPost.edges
  return (
    <Layout>
      {edge.map(({ node: { author, desc } }) => {
        return (
          <div>
            {" "}
            <h2>Author: {author.name}</h2>
            <p>{desc.description}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          author {
            name
          }
          desc: childContentfulBlogPostDescriptionTextNode {
            description
          }
        }
      }
    }
  }
`
