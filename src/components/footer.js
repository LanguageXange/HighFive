import React from "react"
import { FooterContainer } from "./footer.styles"
import { graphql, useStaticQuery } from "gatsby"
import linkedin from "../assets/linkedin.png"
const Footer = () => {
  return (
    <FooterContainer>
      Website made with ❤️ by Cindy L
      <a href="https://www.linkedin.com/in/cindylinubc/" target="__blank">
        <img src={linkedin} />
      </a>
    </FooterContainer>
  )
}

export default Footer
