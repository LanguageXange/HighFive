import React, { useState } from "react"
import Layout from "../layout/layout"
import { graphql } from "gatsby"
import Head from "../components/header"
import Card from "react-bootstrap/Card"
import {
  BlogLink,
  BlogCardContainer,
  BlogCardColumns,
  BlogCol,
} from "../pageStyle/blog.styles"
import { Row, Col, Nav, Dropdown, Badge } from "react-bootstrap"

// onClick event to filter the blog
// filter by date functionality can wait use a drop down menu
// extrapolate shared component into layout so that resources and blog will use the same component
// how to sort blog post in descending order in contentful
// blogs js nav bar need to be fixed

const Blog = ({ data }) => {
  const [option, setOption] = useState("js")
  const posts = data.allContentfulBlogPost.edges
  const filterposts =
    option === "js"
      ? posts
      : option === "react"
      ? posts.filter(post => post.node.tags.includes("react"))
      : posts.filter(post => post.node.tags.includes("learning"))
  return (
    <Layout>
      <Head title="Blog" />

      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link
                active={option === "js"}
                eventKey="js"
                onSelect={() => setOption("js")}
              >
                JavaScript
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="react" onSelect={() => setOption("react")}>
                React
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="learning"
                onSelect={() => setOption("learning")}
              >
                Learning
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* <Dropdown style={{ marginTop: "25px" }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By Month
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item active>Nov 2020</Dropdown.Item>
              <Dropdown.Item>Dec 2020</Dropdown.Item>
              <Dropdown.Item>Jan 2021</Dropdown.Item>
              <Dropdown.Item>Feb 2021</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </Col>
        <BlogCol sm={10}>
          <BlogCardColumns>
            {filterposts.map(
              (
                { node: { publishDate, description, slug, title, tags } },
                id
              ) => {
                return (
                  <BlogCardContainer key={id}>
                    <Card.Body>
                      <BlogLink to={`/blog/${slug}`}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle>{publishDate}</Card.Subtitle>
                        <Card.Text>{description.description}</Card.Text>
                        <Badge pill variant="warning">
                          {tags}
                        </Badge>
                      </BlogLink>
                    </Card.Body>
                  </BlogCardContainer>
                )
              }
            )}
          </BlogCardColumns>
        </BlogCol>
      </Row>
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
          tags
        }
      }
    }
  }
`
