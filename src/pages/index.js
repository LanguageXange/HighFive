import React from "react"
import Layout from "../layout/layout"
import { IntroContainer } from "../pageStyle/index.styles"
import { graphql } from "gatsby"
const Home = ({ data }) => {
  const { title, name, bio } = data.allContentfulPerson.edges[0].node
  return (
    <Layout>
      <IntroContainer>
        <h1>Welcome to my blog </h1>
        <h3>{title}</h3>
        <span>{name}</span>
        <p> {bio.shortBio}</p>
      </IntroContainer>
    </Layout>
  )
}
export default Home

export const query = graphql`
  {
    allContentfulPerson {
      edges {
        node {
          title
          bio: childContentfulPersonShortBioTextNode {
            shortBio
          }
          name
          github
        }
      }
    }
  }
`
