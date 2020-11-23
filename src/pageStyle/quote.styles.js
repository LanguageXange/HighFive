import styled from "styled-components"
import Carousel from "react-bootstrap/Carousel"

export const QuoteContainer = styled.div`
  font-size: 18px;
  text-align: center;
  position: absolute;

  align-self: center;
  color: white;
  background-color: black;
  top: 0;
  right: 0px;
  width: 50%; /*so that image and text 50% each*/
  height: 100%;
  padding: 11% 15px;

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
  /*change width here */
  @media screen and (max-width: 800px) {
    width: 100%;
  } ;
`
