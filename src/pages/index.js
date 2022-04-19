import React from "react"
import Layout from "../layout/layout"
import {
  IntroContainer,
  BgContainer,
  ImgContainer,
} from "../pageStyle/index.styles"
import { graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

import Head from "../components/header"
const Home = ({ data }) => {
  const { bio, about } = data.allContentfulPerson.edges[0].node
  return (
    <Layout>
      <Head title="Home" />

      <IntroContainer>
        <h1>About High Five</h1>
        <p>{bio.shortBio}</p>

        <ul>
          <li>Coding Journey</li>
          <li>Learning Resources</li>
          <li>Positive Vibe</li>
        </ul>
      REMOVE IMAGE
      
        <span>{about}</span>
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
          about
          image {
            fixed(height: 140) {
              ...GatsbyContentfulFixed
            }

            title
          }
          bgImg {
            title
            fixed(width: 1500) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
