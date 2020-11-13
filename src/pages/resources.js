import React, { useState, useEffect } from "react"
import Layout from "../layout/layout"
import Head from "../components/header"
import { graphql } from "gatsby"
import { CardContainer } from "../pageStyle/resources.styles"
import {
  Row,
  Col,
  Nav,
  Container,
  Card,
  CardColumns,
  Button,
  Badge,
} from "react-bootstrap"

// Todo: ThemeProvider to override styling
// Don't push too frequenly - be ware of the netlify limits
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
      <Container fluid style={{ marginTop: "25px", marginBottom: "100px" }}>
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
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="free" onSelect={() => setOption("free")}>
                  Free
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="paid" onSelect={() => setOption("paid")}>
                  Paid
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <CardColumns>
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
            </CardColumns>
          </Col>
        </Row>
      </Container>
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
