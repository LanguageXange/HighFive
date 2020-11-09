import styled from "styled-components"

// url to access image: has to be inside public folder; netlify couldn't find it; switch to import
export const IntroContainer = styled.div`
  height: 90vh;
  overflow: hidden;
  padding: 45px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const BgContainer = styled.img`
  z-index: -5;
  width: 100%;
  position: absolute;
  height: 90vh;
  opacity: 0.5;
`
