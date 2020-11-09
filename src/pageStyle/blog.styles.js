import styled from "styled-components"
import { Link } from "gatsby"

export const FilterContainer = styled.section`
  width: 100%;
  background-color: lightcoral;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`
export const BlogFilter = styled.div`
  width: 25%;
  height: 100px;
  background-color: grey;
`

export const BlogLink = styled(Link)`
  color: black;
  :hover {
    text-decoration: none;
  }
`
