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
  /* Make the parent a positioning container */
  position: relative;
  display: inline-block;

  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;

  /* Pseudo-element for the animated underline */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px; /* Thickness of the underline */
    // border-radius: 2rem;        /* Rounded corners
    background-color: blue; /* Color of the underline */

    /* Start with the underline “invisible” (scaleX(0)) */
    transform: scaleX(0);
    transform-origin: left center;

    /* Smooth transition when scaling from 0 to 1 */
    transition: transform 0.3s ease-out;
  }

  /* When hovering, scale the underline to 100% width */
  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }
`;

export default NavbarContainer;
