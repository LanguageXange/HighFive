import React from "react"
import Layout from "../layout/layout"
import {
  IntroContainer,
  BgContainer,
  ImgContainer,
} from "../pageStyle/index.styles"
import { graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import bgimg from "../assets/sunset.jpg"

import Head from "../components/header"
const Home = ({ data }) => {
  const { bio, image, about } = data.allContentfulPerson.edges[0].node
  return (
    <Layout>
      <Head title="Home" />
      <IntroContainer>
        <h1>About High Five</h1>
        <p>{bio.shortBio}</p>

        <ul>
          <li>My Coding Journey & Tips</li>
          <li>Best Free & Paid Resources</li>
          <li>Inspiration & Positivity</li>
        </ul>

        <ImgContainer fixed={image.fixed}></ImgContainer>
        <p>{about}</p>
        <BgContainer src={bgimg} />
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
            fixed(height: 130) {
              ...GatsbyContentfulFixed
            }
            fluid(maxWidth: 400) {
              src
            }
            title
          }
        }
      }
    }
  }
`
