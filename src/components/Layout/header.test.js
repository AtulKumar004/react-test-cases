/**
 * @file Navbar.test.jsx
 * Example unit tests for a Navbar component using Jest & React Testing Library.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; // For extra DOM matchers like .toBeInTheDocument()
import Navbar from './Navbar';      // <-- Assume you have a Navbar component

// Mock a "router" if your Navbar uses react-router
// or you can just test for "href" attributes if using <a> tags.
jest.mock('react-router-dom', () => ({
  // Example: If your code uses 'useNavigate', you could mock it here.
  useNavigate: () => jest.fn(),
}));

describe('Navbar Component Tests', () => {

  // Utility to render the Navbar with common props, if needed.
  // Adjust the props you pass as required for your component.
  const renderNavbar = (props = {}) => {
    return render(<Navbar {...props} />);
  };

  // --------------------------------------------------------------------------
  // 1. Navbar Container
  // --------------------------------------------------------------------------
  describe('Navbar Container', () => {
    test('should render with predefined left-right padding (positive scenario)', () => {
      renderNavbar();
      const navbarContainer = screen.getByTestId('navbar-container'); 
      // Make sure your <div> or main container in Navbar has data-testid="navbar-container".

      // Check style-based property
      expect(navbarContainer).toHaveStyle({
        paddingLeft: '20px',
        paddingRight: '20px',
      });
    });

    test('should fail if padding is missing (negative scenario)', () => {
    //   In practice, you might have a separate version of your component or override props
    //   to cause it to not apply the correct padding. For demonstration, we'll just check
    //   that it does NOT have a style we expect to fail.
      renderNavbar();

      const navbarContainer = screen.getByTestId('navbar-container');

      // Example negative check: we expect it NOT to have incorrect padding
      expect(navbarContainer).not.toHaveStyle({
        paddingLeft: '0px',
        paddingRight: '0px',
      });
    });
  });

  // --------------------------------------------------------------------------
  // 2. Left-most Logo
  // --------------------------------------------------------------------------
  describe('Left-most Logo', () => {
    test('should display logo with correct size and alt text (positive)', () => {
      renderNavbar();
      const logo = screen.getByAltText(/b2b ninja logo/i); 
      // Adjust alt text as needed

      expect(logo).toBeInTheDocument();
      // If you use 'toHaveStyle' or 'getComputedStyle' to check size:
      // (This example is simplistic; real tests might mock an actual width or check a bounding box.)
      expect(logo).toHaveStyle({ width: '150px' });
    });

    test('clicking the logo should redirect to home page (positive)', async () => {
      renderNavbar();
      const user = userEvent.setup();
      const logo = screen.getByAltText(/b2b ninja logo/i);

      await user.click(logo);
      // If using a react-router mock, you can check if 'useNavigate' or 'navigate' was called.
      // Or if using <a href="/home">, we can check the link's href attribute after a click.

      // Example: If your logo is an <a> with href="/home":
      expect(logo.closest('a')).toHaveAttribute('href', '/home');
    });

    test('should fail if logo alt text is incorrect (negative)', () => {
      // In a "real" scenario, you might test a version of the component with the wrong alt text.
      // For demonstration, we just expect that the correct alt text is present,
      // so a negative scenario could look like this:
      renderNavbar();
      const wrongLogo = screen.queryByAltText(/wrong alt text/i);
      expect(wrongLogo).not.toBeInTheDocument();
    });
  });

  // --------------------------------------------------------------------------
  // 3. Navbar Items (Desktop)
  // --------------------------------------------------------------------------
  describe('Navbar Desktop Items', () => {
    test('should display main navigation items in correct order (positive)', () => {
      renderNavbar();
      // Check presence of each nav item (Modules, Pricing, Partners, etc.)
      const modulesLink = screen.getByRole('link', { name: /modules/i });
      const pricingLink = screen.getByRole('link', { name: /pricing/i });
      const partnersLink = screen.getByRole('link', { name: /partners/i });
      // ...and so on

      expect(modulesLink).toBeInTheDocument();
      expect(pricingLink).toBeInTheDocument();
      expect(partnersLink).toBeInTheDocument();
    });

    test('nav items should have hover style (positive)', async () => {
      renderNavbar();
      const user = userEvent.setup();
      const modulesLink = screen.getByRole('link', { name: /modules/i });

      await user.hover(modulesLink);
      // Now check for a style change (color, underline, etc.)
      expect(modulesLink).toHaveStyle({ textDecoration: 'underline' });
      // Adjust to your actual hover style
    });

    test('clicking a nav item should redirect to its route (positive)', async () => {
      renderNavbar();
      const user = userEvent.setup();
      const pricingLink = screen.getByRole('link', { name: /pricing/i });
      await user.click(pricingLink);

      // Example: If using <a> tags with href
      expect(pricingLink).toHaveAttribute('href', '/pricing');
    });

    test('should fail when a nav item is missing (negative)', () => {
      renderNavbar({ hidePricing: true }); 
      // Hypothetically pass a prop that removes the "Pricing" link

      const pricingLink = screen.queryByRole('link', { name: /pricing/i });
      expect(pricingLink).not.toBeInTheDocument();
    });
  });

  // --------------------------------------------------------------------------
  // 4. Right-most Buttons (Desktop)
  // --------------------------------------------------------------------------
  describe('Right-most Buttons (Desktop)', () => {
    test('Sign In button should be visible and clickable (positive)', async () => {
      renderNavbar();
      const user = userEvent.setup();
      const signInBtn = screen.getByRole('button', { name: /sign in/i });
      expect(signInBtn).toBeInTheDocument();

      await user.click(signInBtn);
      // Check if it navigates or triggers a login flow
      // e.g. expect(mockNavigate).toHaveBeenCalledWith('/login');
    });

    test('Free Trial button should be visible and navigate (positive)', async () => {
      renderNavbar();
      const user = userEvent.setup();
      const freeTrialBtn = screen.getByRole('button', { name: /free trial/i });

      expect(freeTrialBtn).toBeInTheDocument();
      await user.click(freeTrialBtn);
      // e.g. expect(mockNavigate).toHaveBeenCalledWith('/free-trial');
    });
  });

  // --------------------------------------------------------------------------
  // 5. Mobile Responsiveness
  // --------------------------------------------------------------------------
  describe('Mobile Responsiveness', () => {
    test('should hide main nav items and show hamburger menu (positive)', () => {
      // We'll mimic a mobile screen using a CSS media query approach or a style prop.
      // This is a simplified example. React Testing Library doesn't directly resize the viewport,
      // so you might need to wrap in a <div style={{ width: '375px' }}> or use jest + @media mocks.

      renderNavbar({ isMobile: true }); 
      // Suppose your Navbar checks props.isMobile or a window size hook

      // Expect nav items to be hidden
      const modulesLink = screen.queryByRole('link', { name: /modules/i });
      expect(modulesLink).not.toBeInTheDocument();

      // Expect hamburger icon is visible
      const hamburgerBtn = screen.getByTestId('hamburger-button');
      expect(hamburgerBtn).toBeInTheDocument();
    });

    test('clicking hamburger menu reveals nav items (positive)', async () => {
      renderNavbar({ isMobile: true });
      const user = userEvent.setup();
      const hamburgerBtn = screen.getByTestId('hamburger-button');

      await user.click(hamburgerBtn);

      // Now the nav items should appear in a dropdown or side drawer
      const modulesLink = screen.getByRole('link', { name: /modules/i });
      expect(modulesLink).toBeInTheDocument();
    });
  });

  // --------------------------------------------------------------------------
  // 6. Navbar Banner (Top Black Strip)
  // --------------------------------------------------------------------------
  describe('Navbar Banner', () => {
    test('banner should have correct background color and text (positive)', () => {
      renderNavbar();
      const banner = screen.getByTestId('navbar-banner');
      // e.g. <div data-testid="navbar-banner" className="top-banner">...</div>

      expect(banner).toBeInTheDocument();
      expect(banner).toHaveStyle({ backgroundColor: 'black' });

      // Check banner text
      expect(banner).toHaveTextContent('B2B Ninja is now part of BigCommerce');
    });

    test('should fail if banner text is missing (negative)', () => {
      // Provide a prop that removes or changes banner text
      renderNavbar({ hideBannerText: true });

      const banner = screen.queryByText(/b2b ninja is now part of bigcommerce/i);
      expect(banner).not.toBeInTheDocument();
    });
  });

});
