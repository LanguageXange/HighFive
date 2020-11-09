import React from "react"
import Layout from "../layout/layout"
import Head from "../components/header"
import { graphql } from "gatsby"
import { FreeContainer, PaidContainer } from "../pageStyle/resources.styles.js"
import {
  Row,
  Col,
  Nav,
  Container,
  Card,
  CardDeck,
  CardColumns,
} from "react-bootstrap"

// Todo: ThemeProvider to override styling
const Resources = () => {
  const style = {
    backgroundColor: "lightblue",
    color: "black",
  }
  return (
    <Layout>
      <Head title="Resource" />
      <Container fluid style={{ marginTop: "25px" }}>
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" style={style}>
                  Free
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Paid</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <CardColumns>
              {[1, 2, 3, 4, 5, 6].map((x, i) => {
                return (
                  <Card key={i}>
                    <Card.Body>
                      <Card.Title>Coming Soon</Card.Title>
                      <Card.Text>Stay tuned</Card.Text>
                    </Card.Body>
                  </Card>
                )
              })}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Resources
