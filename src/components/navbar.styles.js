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
    margin-bottom: 25px;
    font-size: 18px;
  }
`
export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  z-index: 20;

  &:before {
    content: "";
    width: 15px;
    border-radius: 55% 20px;
    z-index: -1;
    height: 15px;
    display: block;
    position: absolute;
    top: 30px;
    left: 5px;
  }

  &:hover {
    &:before {
      width: 160%;
      transition: all 0.2s ease-in-out;
      height: 45px;
      top: -5px;
      left: -15px;
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
`
export const NavLogo = styled.div`
  height: 55px;
  width: 150px;
  font-size: 20px;

  background: linear-gradient(
    55deg,
    rgba(217, 114, 66, 0.8) 0%,
    rgba(245, 162, 37, 0.9) 33%,
    rgba(204, 20, 125, 0.8) 100%
  );
  border-radius: 55% 28px;
  display: grid;
  place-items: center;
  user-select: none;
`
