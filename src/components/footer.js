import React from "react"
import { FooterContainer } from "./footer.styles"
import { graphql, useStaticQuery } from "gatsby"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <FooterContainer>
      Website made with ❤️ by {data.site.siteMetadata.author}
    </FooterContainer>
  )
}

export default Footer
