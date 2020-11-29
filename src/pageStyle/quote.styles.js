import styled from "styled-components"
import Carousel from "react-bootstrap/Carousel"

export const QuoteContainer = styled.div`
  font-size: 18px;
  text-align: center;
  position: absolute;
  align-self: center;
  background-color: #000000;
  color: white;
  top: 0;
  right: 0px;
  width: 50.5%; /*so that image and text 50% each*/
  height: 100%;
  padding: 8% 15px;

  h2 {
    font-weight: 700;
    font-size: 24px;
  }

  @media screen and (max-width: 800px) {
    font-size: 10px;
    padding: 7% 10px;

    h2 {
      font-size: 15px;
    }
  } ;
`

export const CarouselContainer = styled(Carousel)`
  width: 75%;
  margin: 0 auto;
  border: 10px solid pink;
  border-radius: 5px;
  @media screen and (max-width: 780px) {
    width: 100%;
  } ;
`
