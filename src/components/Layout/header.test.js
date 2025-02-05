// Header.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

// Helper function to wrap components in MemoryRouter to support react-router-dom's Link components
// const renderWithRouter = (ui) => {
//   return render(<MemoryRouter>{ui}</MemoryRouter>);
// };

// describe("Header - Desktop View", () => {
//   beforeEach(() => {
//     // For desktop view, we assume that media query CSS makes desktop-only elements visible.
//     // Render the Header component wrapped in a MemoryRouter.
//     render(<Header />);
//   });

  test("renders navbar container with predefined left and right padding", () => {
    const  {debuge} = render(<Header />);
    // Assuming that the Section component has data-testid="navbar-container"
    const navbarContainer = screen.getByTestId("navbar-container");
    console.log(debug);
    expect(navbarContainer).toBeInTheDocument();
    
    // expect(navbarContainer).toHaveStyle('padding: 0 10%');w

    // Optionally, check if the container has correct padding.
    // For example, if the inline style or className is used:
    // expect(navbarContainer).toHaveStyle("padding: 0 10%");
  });

  // test("renders the logo with the correct attributes", () => {
  //   // The logo is rendered inside an <a> tag with an <img> having alt="Logo".
  //   const logoLink = screen.getByRole("link", { name: /logo/i });
  //   expect(logoLink).toBeInTheDocument();
  //   expect(logoLink).toHaveAttribute("href", "#home");

  //   const logoImage = screen.getByAltText("Logo");
  //   expect(logoImage).toBeInTheDocument();

  //   // If you want to check for specific sizing, verify via class names or inline styles.
  //   // For example:
  //   // expect(logoImage).toHaveStyle("width: 80%");
  // });

  // test("renders navigation items with hover and redirection effects", () => {
  //   // Verify that navigation items such as "Modules" are present.
  //   const modulesNav = screen.getByText(/modules/i);
  //   expect(modulesNav).toBeInTheDocument();
    
  //   // Check that the link navigates to the correct URL.
  //   expect(modulesNav.closest("a")).toHaveAttribute("href", "/modules");

  //   const pricingNav = screen.getByText(/pricing/i);
  //   expect(pricingNav).toBeInTheDocument();

  //   // Simulate a click event on the navigation item.
  //   // (Redirection behavior may require more integration testing with history, but here we at least check the presence and correct href.)
  //   fireEvent.click(modulesNav);
  // });

  // test("renders Sign In and Free Trial buttons in the rightmost section", () => {
  //   // Verify that the "Sign In" button is present.
  //   const signInButton = screen.getByText(/sign in/i);
  //   expect(signInButton).toBeInTheDocument();

  //   // Verify that the "Free Trial" button is present.
  //   const freeTrialButton = screen.getByText(/free trial/i);
  //   expect(freeTrialButton).toBeInTheDocument();
  // });
});

// describe("Header - Mobile Responsive View", () => {
//   beforeEach(() => {
//     // Simulate a mobile view by overriding window.matchMedia
//     Object.defineProperty(window, "matchMedia", {
//       writable: true,
//       value: jest.fn().mockImplementation((query) => ({
//         matches: query.includes("min-width: 1024px") ? false : true,
//         media: query,
//         onchange: null,
//         addListener: jest.fn(), // deprecated
//         removeListener: jest.fn(), // deprecated
//         addEventListener: jest.fn(),
//         removeEventListener: jest.fn(),
//         dispatchEvent: jest.fn(),
//       })),
//     });

//     renderWithRouter(<Header />);
//   });

//   test("in mobile view, navigation items are hidden and hamburger menu is visible", () => {
//     // On mobile, the nav items (inside the <nav> element) should have the class "hidden"
//     // Here we query by role if possible. If your <nav> element doesn't have a role, you may use data-testid.
//     const navElement = screen.getByRole("navigation");
//     expect(navElement).toHaveClass("hidden");

//     // The hamburger menu should be visible in mobile view.
//     // Ensure you add data-testid="hamburger-menu" to the hamburger menu element in your Header component.
//     const hamburgerMenu = screen.getByTestId("hamburger-menu");
//     expect(hamburgerMenu).toBeInTheDocument();
//   });

//   test("in mobile view, clicking the logo navigates to #home", () => {
//     // The logo should be clickable even on mobile.
//     const logoLink = screen.getByRole("link", { name: /logo/i });
//     fireEvent.click(logoLink);

//     // Since the logo's href is "#home", we verify that attribute.
//     expect(logoLink).toHaveAttribute("href", "#home");
//   });

//   test("in mobile view, clicking the hamburger menu toggles the mobile nav dropdown", () => {
//     // Simulate clicking on the hamburger menu.
//     const hamburgerMenu = screen.getByTestId("hamburger-menu");
//     fireEvent.click(hamburgerMenu);

//     // Assume that clicking the hamburger menu displays a dropdown with data-testid="mobile-nav-dropdown".
//     // You need to implement this dropdown functionality in your component for the test to pass.
//     const mobileDropdown = screen.getByTestId("mobile-nav-dropdown");
//     expect(mobileDropdown).toBeInTheDocument();

//     // Verify that the mobile dropdown contains the expected navigation items.
//     expect(screen.getByText(/modules/i)).toBeInTheDocument();
//     expect(screen.getByText(/pricing/i)).toBeInTheDocument();
//   });
// });

// describe("Navbar Banner (Announcement Bar)", () => {
//   beforeEach(() => {
//     // Render the Header to test the announcement bar.
//     renderWithRouter(<Header />);
//   });

//   test("announcement bar displays the correct text and styling", () => {
//     // Verify that the announcement text is rendered correctly.
//     const announcementTextRegex = /B2B Ninja is now part of BigCommerce\. Same team\. Same support\. New horizons\./i;
//     const announcementBar = screen.getByText(announcementTextRegex);
//     expect(announcementBar).toBeInTheDocument();

//     // Verify that the announcement bar container has expected classes.
//     // In this case, we expect classes for center alignment, background color, and text color.
//     expect(announcementBar.parentElement).toHaveClass("text-center");
//     expect(announcementBar.parentElement).toHaveClass("bg-black");
//     expect(announcementBar.parentElement).toHaveClass("text-white");
//   });

//   test("announcement bar hover effect maintains the correct text", () => {
//     // Simulate a hover event on the announcement bar container.
//     // Note: Actual CSS hover effects are not directly testable in JSDOM,
//     // but we can simulate mouse events to ensure no unexpected changes occur.
//     const announcementBar = screen.getByText(/B2B Ninja is now part of BigCommerce/i).parentElement;
//     fireEvent.mouseOver(announcementBar);
    
//     // Verify that the announcement text remains unchanged.
//     expect(announcementBar).toHaveTextContent(
//       "B2B Ninja is now part of BigCommerce. Same team. Same support. New horizons."
//     );
//   });
// });
