import styled from "styled-components"
import { Link } from "gatsby"
import { CardContainer } from "./resources.styles"
import CardColumns from "react-bootstrap/CardColumns"
//import CardDeck from "react-bootstrap/CardDeck"
import Col from "react-bootstrap/Col"
export const BlogLink = styled(Link)`
  color: black;
  font-weight: 600;
  :hover {
    text-decoration: none;
  }
`
export const BlogCardContainer = styled(CardContainer)`
  /*add any customization here to overwrite*/

  /* border-radius: 15px; */
`

export const BlogCardColumns = styled(CardColumns)`
  /* @media screen and (max-width: 1100px) {
    column-count: 2;
  }
  @media screen and (max-width: 776px) {
    column-count: 1;
  } */
`

export const BlogCol = styled(Col)`
  @media screen and (max-width: 778px) {
    max-width: unset;
    flex: unset;
  }
`
