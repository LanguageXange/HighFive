import React from "react"
import Layout from "../layout/layout"
import {
  IntroContainer,
  BgContainer,
  ImgContainer,
} from "../pageStyle/index.styles"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "bootstrap/dist/css/bootstrap.min.css"
import bgimg from "../assets/sunset.jpg"

import Head from "../components/header"
const Home = ({ data }) => {
  const { bio, image, about, bgImg } = data.allContentfulPerson.edges[0].node
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
        <BgContainer fixed={bgImg.fixed} />
        <ImgContainer fixed={image.fixed} alt="personal logo"></ImgContainer>
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
