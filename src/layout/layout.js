import React from "react"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import Container from "react-bootstrap/Container"
import { PageContainer } from "./layout.styles"
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <PageContainer>
        <Container
          fluid
          style={{
            marginTop: "25px",
            marginBottom: "100px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          {children}
        </Container>
      </PageContainer>

      <Footer />
    </>
  )
}

export default Layout
