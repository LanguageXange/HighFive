import React from "react"
import Layout from "../layout/layout"
import { graphql, useStaticQuery } from "gatsby"

const TestBlog = () => {
  const mydata = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              date
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      {mydata.allMarkdownRemark.edges.map(x => (
        <h2>{x.node.frontmatter.title}</h2>
      ))}
    </Layout>
  )
}

export default TestBlog
