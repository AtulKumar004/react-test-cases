// Footer.jsx

import React from "react";
import Section, { Container } from "../styled/Main";
import footerBG from "../../assest/footerBG.svg";
import { NavItems } from "../styled/NavbarContainer";
import storageIcon from "../../assest/storageIcon.svg";
import chatIcon from "../../assest/chatIcon.svg";

const Footer = () => {
  return (
    <div
      className="w-full mx-auto  flex flex-col items-center footer-container "
    >
      <Container
        className="
        bg-no-repeat bg-cover bg-center
        w-full
        // pt-10

     
      "
        style={{
          backgroundImage: `url(${footerBG})`,
          backgroundColor: "#121117",
        }}
      >
        <div className="w-full mx-auto  flex flex-col items-center ">
          <div className="w-full py-8 flex flex-col md:flex-row   max-w-[80rem]   gap-0 md:gap-16">
            {/* Top Row: "Questions or Need Help?" + Buttons */}
            <div className="flex   flex-col items-start md:items-center mt-8    gap-8   ">
              <h2 className="text-xl text-white font-bold mb-4 md:mb-0">
                Questions or Need Help?
              </h2>
              <div className="flex flex-col space-y-4 w-full ">
                <NavItems
                  to="/knowledge-base"
                  className="   flex-row items-center px-4 py-2  gap-6
    rounded-xl
    bg-[linear-gradient(90deg,#34313f,#283981)]
    hover:bg-[linear-gradient(90deg,#4100a3,#0d52ff)]
    transition-all ease-linear duration-[5000]  max-w-full md:max-w-[255px] 
  "
                  disableUnderline
                  display="flex"
                  color="#edeff3"
                  fontWeight="400"
                >
                  <span className="material-icons mr-2">
                    <img src={storageIcon} alt="storageIcon" />
                  </span>

                  <div className=" flex-1 text-center">Knowledge Base</div>
                </NavItems>

                <NavItems
                  to="/chat"
                  className="
    flex-row items-center px-4 py-2 gap-6
     rounded-xl
    bg-[linear-gradient(90deg,#34313f,#283981)]
    hover:bg-[linear-gradient(90deg,#4100a3,#0d52ff)]
    transition-all ease-linear duration-[5000] max-w-full md:max-w-[255px]  "
                  disableUnderline
                  display="flex"
                  color="#edeff3"
                  fontWeight="400"
                >
                  <span className="material-icons mr-2">
                    <img src={chatIcon} alt="chatIcon" />
                  </span>
                  <div className=" flex-1 text-center">Chat with us</div>
                </NavItems>
              </div>
            </div>

            {/* Middle Section: Columns of links */}
            <div
              className=" 
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
              gap-6    mt-8
            "
            >
              {/* B2B Ninja Links */}
              <div className=" flex flex-col gap-2 md:gap-8">
                <h2 className="text-xl text-white font-bold mb-4 md:mb-0">
                  B2B Ninja
                </h2>
                <ul className="space-y-2 w-full grid grid-cols-2 md:grid-cols-1">
                  <li>
                    <NavItems
                      to="/quotes"
                      className="hover:text-white hover:font-[600]"
                      color="#edeff3"
                      fontWeight="400"
                    >
                      Quotes
                    </NavItems>
                  </li>
                  <li>
                    <NavItems
                      to="/pricing"
                      className="hover:text-white hover:font-[600]"
                      color="#edeff3"
                      fontWeight="400"
                    >
                      Pricing
                    </NavItems>
                  </li>
                  <li>
                    <NavItems
                      to="/partners"
                      className="hover:text-white hover:font-[600]"
                      color="#edeff3"
                      fontWeight="400"
                    >
                      Partners
                    </NavItems>
                  </li>
                  <li>
                    <NavItems
                      to="/about"
                      className="hover:text-white hover:font-[600]"
                      color="#edeff3"
                      fontWeight="400"
                    >
                      About Us
                    </NavItems>
                  </li>
                  <li>
                    <NavItems
                      to="/contact"
                      className="hover:text-white hover:font-[600]"
                      color="#edeff3"
                      fontWeight="400"
                    >
                      Contact
                    </NavItems>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div className="flex flex-col gap-2 md:gap-8 flex-1  col-span-2">
                <h2 className="text-xl text-white font-bold mb-4 md:mb-0">
                  Resources
                </h2>
                <ul className=" w-full grid grid-cols-2 mt-3 gap-x-4 lg:gap-x-12 md:mt-6 gap-4">
                  <li className=" w-full flex gap-16">
                    <NavItems
                      to="/installation-setup"
                      className=""
                      color="#edeff3"
                      fontWeight="400"
                    >
                      Installation and Setup
                    </NavItems>
                  </li>
                  <li>
                    <NavItems
                      to="/configuring-b2b-ninja"
                      className=""
                      color="#edeff3"
                      fontWeight="400"
                    >
                      Configuring B2B Ninja
                    </NavItems>
                  </li>
                  <li>
                    <NavItems
                      to="/quote-follow-up-template"
                      className=""
                      color="#edeff3"
                      fontWeight="400"
                    >
                      Quote Follow Up Email Template
                    </NavItems>
                  </li>
                  <li>
                    <NavItems
                      to="/view-quote-history"
                      className=""
                      color="#edeff3"
                      fontWeight="400"
                    >
                      Viewing Quote History
                    </NavItems>
                  </li>
                  <li>
                    <NavItems
                      to="/using-b2b-ninja"
                      className=""
                      color="#edeff3"
                      fontWeight="400"
                    >
                      Using B2B Ninja
                    </NavItems>
                  </li>
                  <li>
                    <NavItems
                      to="/using-custom-shipping"
                      className=""
                      color="#edeff3"
                      fontWeight="400"
                    >
                      Using Custom Shipping
                    </NavItems>
                  </li>
                  <li>
                    <NavItems
                      to="/all-about-shipping"
                      className=""
                      color="#edeff3"
                      fontWeight="400"
                    >
                      All About Shipping in B2B Ninja
                    </NavItems>
                  </li>
                  <li>
                    <NavItems
                      to="/api-documentation"
                      className=""
                      color="#edeff3"
                      fontWeight="400"
                    >
                      API Documentation
                    </NavItems>
                  </li>
                </ul>
              </div>
              {/* Add additional columns if needed */}
            </div>
          </div>
          {/* Bottom Row */}
          <div className="copy-rigth my-8  border-t border-gray-700 pt-4 flex flex-col md:flex-row md:items-center md:justify-between max-w-[80rem] w-full">
            <div className="text-xl text-white mb-3 md:mb-0">
              <p>Copyright © 2025 - Quote Ninja, Inc.</p>
              <p>Marketing by Kokopelli Agency</p>
            </div>
            <div className="flex space-x-4 text-sm">
              <NavItems
                to="/security-overview"
                className=""
                color="#edeff3"
                fontWeight="400"
              >
                Security Overview
              </NavItems>
              <NavItems
                to="/gdpr-policy"
                className=""
                color="#edeff3"
                fontWeight="400"
              >
                GDPR Policy
              </NavItems>
              <NavItems
                to="/privacy-policy"
                className=""
                color="#edeff3"
                fontWeight="400"
              >
                Privacy Policy
              </NavItems>
              <NavItems
                to="/terms-of-service"
                className=""
                color="#edeff3"
                fontWeight="400"
              >
                Terms of Service
              </NavItems>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
