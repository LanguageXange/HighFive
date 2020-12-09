import React from "react"
import Layout from "../layout/layout"
import Head from "../components/header"
import { graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import { QuoteContainer, CarouselContainer } from "../pageStyle/quote.styles"

const Quote = ({ data }) => {
  const quotes = data.allContentfulQuote.edges

  return (
    <Layout>
      <Head title="Quote" />

      <CarouselContainer>
        {quotes.map((quote, id) => {
          return (
            <Carousel.Item key={id} interval={5000}>
              <img
                src={quote.node.quoteImage.fixed.src}
                alt="quote slides"
                className="w-50"
              />
              <QuoteContainer>
                <h2>{quote.node.topic}</h2>
                <p>{quote.node.description}</p>
              </QuoteContainer>
            </Carousel.Item>
          )
        })}
      </CarouselContainer>
      <p style={{ textAlign: "center" }}>Stay strong</p>
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
