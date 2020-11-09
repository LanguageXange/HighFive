import React from "react"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import { Container } from "./layout.styles"
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>

      <Footer />
    </>
  )
}

export default Layout
