import styled from "styled-components"
import Img from "gatsby-image"
// url to access image: has to be inside public folder; netlify couldn't find it; switch to import
export const IntroContainer = styled.div`
  height: 90vh;
  overflow: hidden;
  padding: 45px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8rem;
  p {
    padding: 25px;
    width: 80%;
    font-size: 20px;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin-bottom: 2em;
    padding: 0;
    li {
      font-size: 18px;
      margin-right: 20px;
      padding: 5px 10px;
      border: 1px solid black;
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 10px;
    line-height: 1.5rem;
    p {
      padding: 25px;
      width: 100%;
      font-size: 17px;
    }
    ul {
      margin-bottom: 1em;
      li {
        font-size: 12px;
      }
    }
  }
`

export const BgContainer = styled.img`
  z-index: -5;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.4;
`
export const ImgContainer = styled(Img)`
  /*add custom styling for img if needed*/
`
