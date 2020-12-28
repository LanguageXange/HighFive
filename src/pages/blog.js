import React, { useState } from "react"
import Layout from "../layout/layout"
import { graphql } from "gatsby"
import Head from "../components/header"
import Card from "react-bootstrap/Card"
import {
  BlogLink,
  BlogCardContainer,
  BlogCardColumns,
} from "../pageStyle/blog.styles"
import { Row, Col, Nav, Badge } from "react-bootstrap"

// Create a shared component to be used in blog and resource js?
const Blog = ({ data }) => {
  const [option, setOption] = useState("all")
  const posts = data.allContentfulBlogPost.edges
  const filterposts =
    option === "all"
      ? posts
      : option === "js"
      ? posts.filter(post => post.node.tags.includes("javascript"))
      : option === "react"
      ? posts.filter(post => post.node.tags.includes("react"))
      : posts.filter(
          post =>
            post.node.tags.includes("learning") ||
            post.node.tags.includes("general")
        )
  return (
    <Layout>
      <Head title="Blog" />

      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link
                active={option === "all"}
                eventKey="all"
                onSelect={() => setOption("all")}
              >
                All
              </Nav.Link>
              <Nav.Link
                active={option === "js"}
                eventKey="js"
                onSelect={() => setOption("js")}
              >
                JS
              </Nav.Link>

              <Nav.Link eventKey="react" onSelect={() => setOption("react")}>
                React
              </Nav.Link>

              <Nav.Link
                eventKey="learning"
                onSelect={() => setOption("learning")}
              >
                Learn
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={{ span: 10, order: "last" }}>
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
        </Col>
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
