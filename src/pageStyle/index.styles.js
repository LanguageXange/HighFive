import styled from "styled-components"

// bgimage using url to access image: has to be inside public folder; netlify couldn't find it; switch to import
export const IntroContainer = styled.div`
  height: 90vh;
  padding: 45px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8rem;
  h1 {
    font-size: 35px;
  }
  p {
    padding: 25px;
    width: 80%;
    font-size: 20px;
  }
  span {
    margin-top: 15px;
    text-align: center;
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
    h1 {
      font-size: 28px;
    }
    p {
      padding: 10px;
      width: 100%;
      font-size: 14px;
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
  position: absolute !important;
  width: 90% !important;
  /*height: 80% !important; */
  opacity: 0.5;
  z-index: -5;
  @media screen and (max-width: 700px) {
    width: 100% !important;
  }
`
export const ImgContainer = styled.img`
  /*add custom styling for img if needed*/
`
