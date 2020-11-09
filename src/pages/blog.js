import React from "react"
import Layout from "../layout/layout"
import { graphql, Link } from "gatsby"
import Head from "../components/header"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import {
  BlogFilter,
  FilterContainer,
  CustomTag,
  BlogLink,
} from "../pageStyle/blog.styles"
import { Row, Col, Nav, Container, Dropdown } from "react-bootstrap"

// onClick event to filter the blog
// filter by date functionality can wait use a drop down menu
// extrapolate shared component into layout so that resources and blog will use the same component

const Blog = ({ data }) => {
  const edge = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <Head title="Blog" />
      <Container fluid style={{ marginTop: "25px" }}>
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">JavaScript</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">React</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Learning</Nav.Link>
              </Nav.Item>
            </Nav>
            <Dropdown style={{ marginTop: "25px" }}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter By Month
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Nov 2020</Dropdown.Item>
                {/* <Dropdown.Item>December 2020</Dropdown.Item>
                <Dropdown.Item href="/blog">January 2021</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={10}>
            <CardDeck>
              {edge.map(
                ({ node: { publishDate, description, slug, title } }, id) => {
                  return (
                    <Card style={{ width: "18rem" }} key={id}>
                      <BlogLink to={`/blog/${slug}`}>
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Subtitle>{publishDate}</Card.Subtitle>
                          <Card.Text>{description.description}</Card.Text>
                        </Card.Body>
                      </BlogLink>
                    </Card>
                  )
                }
              )}
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          description {
            description
          }
          slug

          publishDate(formatString: "MMMM, DD, yy")
          title
        }
      }
    }
  }
`
