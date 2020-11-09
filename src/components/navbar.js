import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { NavContainer, NavLink, NavLogo } from "./navbar.styles"

// TO DO BURGER MENU

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
        <NavLogo>
          <span>{data.site.siteMetadata.title}</span>
        </NavLogo>
        <NavLink to="/" color="#4285f4">
          About
        </NavLink>
        <NavLink to="/blog" color="#db4437">
          Blog
        </NavLink>
        <NavLink to="/resources" color="#f4b400">
          Resources
        </NavLink>
        <NavLink to="/quote" color="#0f9d58">
          L💡ght
        </NavLink>
      </NavContainer>
    </>
  )
}

export default NavBar
