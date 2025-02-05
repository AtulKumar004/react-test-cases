import React, { useEffect, useState } from "react";
import Section from "../styled/Main";
import Logo from "../../assest/Logo.png";
import SignInIcon from "../../assest/signIn.svg";
import NavbarContainer, { NavItems } from "../styled/NavbarContainer";
import SignUpIcon from "../../assest/signUP_icon.svg";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the announcement bar if the user scrolls down more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* <RxHamburgerMenu /> */}
      {/* <FontAwesomeIcon icon="fa-duotone fa-regular fa-bars" /> */}
      {/* /* Top Announcement Bar */}
      <div
        className={`
          text-center bg-black text-white font-medium text-base py-2
          transition-transform duration-300 ease-in-out hover:bg-[#0d52ff] cursor-pointer
          ${isScrolled ? "-translate-y-full" : "translate-y-0"}
        `}
        data-testid="announcement_bar"
      >
        <p>
          B2B Ninja is now part of BigCommerce. Same team. Same support. New
          horizons.
        </p>
      </div>

      <Section
        data-testid="navbar-container"
        className={`
          sticky top-0 z-50 bg-white
          flex items-center justify-between px-4
        `}
      >
        {/* <header className="bg-black text-white container mx-auto px-4"> */}
        <NavbarContainer className="flex lg:py-0 py-4">
          {/* /* Logo */}
          <div className="lg:py-4 col-span-1 logo">
            <a href="#home" className="text-2xl font-bold">
              {" "}
              <img className=" " src={Logo} alt="Logo" />
            </a>
          </div>

          <nav className="nav-items hidden lg:flex space-x-4 lg:py-4 col-span-8">
            <NavItems to="/modules" className="">
              Modules
            </NavItems>
            <NavItems to="/pricing" className="">
              Pricing
            </NavItems>
            <NavItems to="/partners" className="">
              Partners
            </NavItems>
            <NavItems to="/about" className="">
              About
            </NavItems>
            <NavItems to="/contact" className="">
              Contact
            </NavItems>
            <NavItems to="/resources" className="">
              Resources
            </NavItems>
          </nav>

          <div className="  sign-in-btn hidden lg:flex items-center space-x-4 lg:py-2 col-span-3">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src={SignInIcon}
                alt="sing-in-icon "
                className="w-5 h-5 fill-current text-black group-hover:text-[#0d52ff]"
              />

              <span className="text-[16px] font-[600]  hover:text-[#0d52ff] ">
                Sign In
              </span>
            </div>

            <div className="bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 flex items-center space-x-2">
              <span className="text-[14px] uppercase font-[600]">
                Free Trial
              </span>
              <span>
                <img src={SignUpIcon} alt="sign-up-icon" />
              </span>
            </div>
          </div>
          <div className="lg:hidden flex  hamburger">
            <RxHamburgerMenu className="w-8 h-8" />
          </div>

          {/* Mobile Nav Toggle (if needed) */}
        </NavbarContainer>
        {/* </header> */}
      </Section>
    </>
  );
}
