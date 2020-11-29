import styled from "styled-components"
import Card from "react-bootstrap/Card"
// customize card component !
export const CardContainer = styled(Card)`
  :hover {
    border: 1px solid #ff8000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`
