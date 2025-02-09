import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;

  width: 100%;
  align-items: flex-end;
  justify-content: space-between;

  background-color: transparent;
  a img {
    width: 65%;
  }

  @media (min-width: 1024px) {
    a img {
      width: 80%;
    }
  }
`;



export const NavItems = styled(Link)`
  position: relative;
  display: ${(props) => props?.display || "inline-block"};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: ${(props) => props?.fontWeight || "bold"};
  color: ${(props) => props.color || "black"};
    // transition: background 0.3s ease; /

  /* If disableUnderline is NOT true, apply the underline styles */
  ${({ disableUnderline }) =>
    !disableUnderline &&
    `
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: blue;
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.3s ease-out;
    }

    &:hover::after,
    &:focus::after {
      transform: scaleX(1);
    }
  `}
`;


export default NavbarContainer;
