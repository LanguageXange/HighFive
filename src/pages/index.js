import React from "react"
import Layout from "../layout/layout"
import { IntroContainer } from "../pageStyle/index.styles"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"

import Head from "../components/header"
const Home = ({ data }) => {
  const {
    title,
    bio,
    image,
    about,
    shortBio,
  } = data.allContentfulPerson.edges[0].node
  return (
    <Layout>
      <Head title="Home" />
      <IntroContainer>
        <h1>About High Five</h1>
        <p>{bio.shortBio}</p>

        <ul>
          <li>
            <span>Blog:</span>
            My learning journey & tips.
          </li>
          <li>
            <span>Resources:</span>
            Free & Paid resources.
          </li>
          <li>
            <span> Light:</span>
            Daily dose of positivity. Be inspired!
          </li>
        </ul>

        <Img fixed={image.fixed}></Img>
        <p>{about}</p>
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
            fixed(width: 200) {
              ...GatsbyContentfulFixed
            }
            fluid(maxWidth: 400) {
              sizes
              src
            }
            title
          }
        }
      }
    }
  }
`
