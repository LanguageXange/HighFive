import styled from "styled-components"
import { Link } from "gatsby"
// Add mobile view  -
export const NavContainer = styled.nav`
  padding: 0 20px;
  height: 80px;
  background: black;
  display: flex;
  font-size: 25px;
  align-items: center;
  margin: 0;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
    font-size: 15px;
  }
`
export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  z-index: 20;

  &:before {
    content: "";
    border-radius: 55% 20px;
    z-index: -1;
    height: 10px;
    width: 10px;
    display: block;
    position: absolute;
    top: 30px;
    left: 5px;
  }

  &:hover {
    color: white;
  text-decoration: none;
    &:before {
      width: 160%;
      transition: all 0.25s ease-in-out;
      height: 45px;
      top: -5px;
      left: -18px;
    }
    &:nth-child(2):before {
      background-color: ${({ color }) => color};
    }
    &:nth-child(3):before {
      background-color: ${({ color }) => color};
    }
    &:nth-child(4):before {
      background-color: ${({ color }) => color};
    }
    &:nth-child(5):before {
      background-color: ${({ color }) => color};
    }
  }
  @media screen and (max-width: 800px) {
    &:hover {
    &:before {
      width: 90%;
      height:5px;
      top: 20px;
      left:5px;
    }
  }
`
export const NavLogo = styled.div`
  span {
    font-size: 22px;
    font-weight: 600;
    position: absolute;
    top: 10px;
    left: 40px;
    color: #f4f4f4;
  }

  height: 55px;
  width: 170px;
  position: relative;
  border-radius: 55% 28px;
  user-select: none;

  background: linear-gradient(257deg, #38b6c1, #e979b4, #fbb76c);
  background-size: 500% 500%;
  -webkit-animation: highfive 5s ease infinite;
  -moz-animation: highfive 5s ease infinite;
  animation: highfive 5s ease infinite;

  @-webkit-keyframes highfive {
    0% {
      background-position: 17% 0%;
    }
    50% {
      background-position: 84% 100%;
    }
    100% {
      background-position: 17% 0%;
    }
  }
  @-moz-keyframes highfive {
    0% {
      background-position: 17% 0%;
    }
    50% {
      background-position: 84% 100%;
    }
    100% {
      background-position: 17% 0%;
    }
  }
  @keyframes highfive {
    0% {
      background-position: 17% 0%;
    }
    50% {
      background-position: 84% 100%;
    }
    100% {
      background-position: 17% 0%;
    }
  }

  @media screen and (max-width: 800px) {
    span {
      font-size: 17px;
      left: 12px;
      top: 10px;
    }
    height: 45px;
    width: 100px;
  }
`
