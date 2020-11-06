import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { NavContainer, NavLink, NavLogo } from "./navbar.styles"
const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <NavContainer>
        <NavLogo>{data.site.siteMetadata.title}</NavLogo>
        <NavLink to="/" color="#4285f4">
          Home
        </NavLink>
        <NavLink to="/blog" color="#db4437">
          Blog
        </NavLink>
        <NavLink to="/resources" color="#f4b400">
          Resources
        </NavLink>
        <NavLink to="/story" color="#0f9d58">
          Story
        </NavLink>
      </NavContainer>
    </>
  )
}

export default NavBar
