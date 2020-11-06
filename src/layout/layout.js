import React from "react"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
