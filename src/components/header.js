import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const { description, siteUrl } = data.site.siteMetadata
  const siteTitle = data.site.siteMetadata.title
  return (
    <Helmet>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="High Five Initiative" />
    </Helmet>
  )
}
export default Head
