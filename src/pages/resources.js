import React, { useState, useEffect } from "react"
import Layout from "../layout/layout"
import Head from "../components/header"
import { graphql } from "gatsby"
import { CardContainer } from "../pageStyle/resources.styles"
import { BlogCardColumns } from "../pageStyle/blog.styles"
import { Row, Col, Nav, Card, Button, Badge } from "react-bootstrap"

const Resources = ({ data }) => {
  const resources = data.allContentfulResources.edges
  const [option, setOption] = useState("all")
  const filterResources =
    option === "all"
      ? resources
      : option === "free"
      ? resources.filter(resource => resource.node.free)
      : resources.filter(resource => resource.node.paid)

  return (
    <Layout>
      <Head title="Resource" />

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

              <Nav.Link eventKey="free" onSelect={() => setOption("free")}>
                Free
              </Nav.Link>

              <Nav.Link eventKey="paid" onSelect={() => setOption("paid")}>
                Paid
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <BlogCardColumns>
            {filterResources.map(
              ({ node: { title, reasons, free, both, resourceUrl } }, id) => {
                return (
                  <CardContainer key={id}>
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>

                      {free && !both ? (
                        <Badge pill variant="success">
                          Free
                        </Badge>
                      ) : free && both ? (
                        <Badge pill variant="warning">
                          Free/Paid
                        </Badge>
                      ) : (
                        <Badge pill variant="danger">
                          Paid
                        </Badge>
                      )}
                      <Card.Text>{reasons}</Card.Text>
                      <Button
                        variant="outline-info"
                        href={resourceUrl}
                        target="__blank"
                      >
                        Link
                      </Button>
                    </Card.Body>
                  </CardContainer>
                )
              }
            )}
          </BlogCardColumns>
        </Col>
      </Row>
    </Layout>
  )
}

export default Resources

export const query = graphql`
  {
    allContentfulResources {
      edges {
        node {
          free
          both
          title
          paid
          reasons
          resourceUrl
        }
      }
    }
  }
`
