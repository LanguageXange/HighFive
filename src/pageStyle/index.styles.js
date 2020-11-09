import styled from "styled-components"

// url to access image: has to be inside public folder
export const IntroContainer = styled.div`
  height: 90vh;
  overflow: hidden;
  padding: 45px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/sunset.jpg") no-repeat center;
  line-height: 1.8rem;
  p {
    padding: 25px;
    font-size: 20px;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin-bottom: 3em;
    li {
      font-size: 18px;
      margin-right: 20px;
      padding-right: 20px;
      span {
        font-weight: 600;
        display: block;
      }
    }
  }
`
