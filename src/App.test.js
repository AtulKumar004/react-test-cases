import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides custom matchers
import HeroSection from "./components/HeroSection/HeroSection.jsx"; // Adjust path if needed
test("renders the demo button with correct styles", () => {
  render(<HeroSection />);

  // Select the button using test-id
  const buttonElement = screen.getByTestId("view_demo_btn");

  // Check if button is in the document
  expect(buttonElement).toBeInTheDocument();

  // Check if button has correct text
  expect(buttonElement).toHaveTextContent("VIEW DEMO");

  // Check button styles
  // const styles = window.getComputedStyle(buttonElement);
  // expect(styles.cursor).toBe("pointer"); // Ensure cursor is a pointer
  expect(buttonElement).toHaveClass("cursor-pointer");
  // expect(styles.backgroundColor).toBe("black"); // Ensure correct background color
  // expect(styles.color).toBe("white"); // Ensure text color is white
  // expect(styles.borderRadius).not.toBe("0px"); // Ensure button has rounded corners
});
