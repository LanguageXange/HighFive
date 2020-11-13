import styled from "styled-components"
import Card from "react-bootstrap/Card"
// customize card component !
export const CardContainer = styled(Card)`
  :hover {
    box-shadow: 2px 2px 10px 5px #daddf8;
    cursor: pointer;
    transition: box-shadow 0.4s ease-in-out;
  }
`
