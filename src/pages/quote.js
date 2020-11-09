import React from "react"
import Layout from "../layout/layout"
import Head from "../components/header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, CardColumns, Carousel } from "react-bootstrap"
import { QuoteContainer } from "../pageStyle/quote.styles"

// To-do: ensure same image dimension for the quotes

const Quote = ({ data }) => {
  const quotes = data.allContentfulQuote.edges

  return (
    <Layout>
      <Head title="Quote" />
      <Container fluid style={{ marginTop: "25px", width: "60%" }}>
        <Carousel style={{ backgroundColor: "black" }}>
          {quotes.map((quote, id) => {
            return (
              <Carousel.Item key={id} interval={4000}>
                <img
                  src={quote.node.quoteImage.fixed.src}
                  alt="slides"
                  className="w-50"
                />
                <QuoteContainer>
                  <h1>{quote.node.topic}</h1>
                  <p>{quote.node.description}</p>
                </QuoteContainer>
              </Carousel.Item>
            )
          })}
        </Carousel>

        <h2 style={{ textAlign: "center", marginTop: "25px" }}>
          {" "}
          Stay tuned for more updates
        </h2>
      </Container>
    </Layout>
  )
}

export default Quote

export const query = graphql`
  {
    allContentfulQuote {
      edges {
        node {
          description
          topic
          quoteImage {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`

{
  /* <Container fluid style={{ marginTop: "25px" }}>
<CardColumns>
  {[
    "primary",
    "success",
    "info",
    "warning",
    "light",
    "dark",
    "danger",
  ].map((v, i) => {
    return (
      <Card key={i} bg={v} text={v === "light" ? "dark" : "light"}>
        <Card.Body>
          <Card.Title>Positive Vibe</Card.Title>
          <Card.Text>Quote</Card.Text>
        </Card.Body>
      </Card>
    )
  })}
</CardColumns>
</Container> */
}
