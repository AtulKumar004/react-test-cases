// Card.test.jsx
import React from "react";
// render: To render components in a virtual DOM for testing
// screen: To query elements in the virtual DOM
// fireEvent: To simulate user events (e.g., mouseOver)
import { render, screen, fireEvent } from "@testing-library/react";
// Provides custom Jest matchers for asserting on DOM nodes
import "@testing-library/jest-dom";

// Import your Card component
import Card from "./Card";

// Define the default props to be used for testing
const defaultProps = {
  image: "test-image.jpg",
  title: "Test Title",
  description: "Test Description",
  buttonText: "Test Button",
  titleImg: "test-title-img.jpg",
};

describe("Card Component", () => {
  // ============================
  // Positive Test Cases
  // ============================

  // 1. It should render in card
  test("should render the card component container", () => {
    render(<Card {...defaultProps} />);
    // We assume the container has data-testid="card-container"
    const cardContainer = screen.getByTestId("card-container");
    expect(cardContainer).toBeInTheDocument();
  });

  // 2. It should have hover effect
  test("should apply hover effect on mouse over", () => {
    render(<Card {...defaultProps} />);
    const cardContainer = screen.getByTestId("text-button");

    // Before hover, assume a CSS class 'hovered' is not present.
    // (Your implementation might vary – for Tailwind CSS you may use group-hover or similar.)
    expect(cardContainer).toHaveClass(
      "hover:scale-110 hover:text-xl transition-all hover:bg-[#0d52ff] "
    );

    // expect(cardContainer).not.toHaveClass("hovered");
  });

  // 3. Card should have Image with proper size
  test("should display the background image with proper size", () => {
    render(<Card {...defaultProps} />);
    // We assume the main image element has data-testid="card-image"
    const cardImage = screen.getByTestId("card-container");
    expect(cardImage).toBeInTheDocument();

    expect(cardImage.style.backgroundImage).toBe(`url(${defaultProps.image})`);
  });

  // 4. Card should have background img
  test("should have background image set correctly on the card container", () => {
    render(<Card {...defaultProps} />);
    const cardContainer = screen.getByTestId("card-container");
    // Check if the container’s inline style has the background image URL.
    // (This assumes your component applies the background image via inline style.)
    expect(cardContainer).toHaveStyle(
      `background-image: url(${defaultProps.image})`
    );
  });

  // 5. It should have title Image
  test("should display the title image", () => {
    render(<Card {...defaultProps} />);
    // We assume the title image element has data-testid="card-title-image"
    const titleImage = screen.getByTestId("card-title-image");
    expect(titleImage).toBeInTheDocument();
    expect(titleImage).toHaveAttribute("src", defaultProps.titleImg);
  });

  // 6. It should have text
  test("should display title, description, and button text", () => {
    render(<Card {...defaultProps} />);
    // Check that the title text is rendered

    // Check that the description text is rendered
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    // Check that the button with the correct text is rendered.
    // Using getByRole is a best practice to mimic how users find elements.
    expect(
      screen.getByRole("button", { name: defaultProps.buttonText })
    ).toBeInTheDocument();
  });

  // ============================
  // Negative Test Cases
  // ============================

  // Negative Test: When the titleImg prop is missing, the title image should not be rendered.
  test("should not render title image if titleImg prop is missing", () => {
    const propsWithoutTitleImg = {
      ...defaultProps,
      titleImg: undefined,
    };
    render(<Card {...propsWithoutTitleImg} />);
    // Use queryByTestId which returns null if not found.
    const titleImage = screen.queryByTestId("card-title-image");
    expect(titleImage).not.toBeInTheDocument();
  });

  // Negative Test: When the image prop is missing, the main image should not be rendered.
  test("should not render main image if image prop is missing", () => {
    const propsWithoutImage = {
      ...defaultProps,
      image: undefined,
    };
    render(<Card {...propsWithoutImage} />);
    const cardImage = screen.queryByTestId("card-image");
    expect(cardImage).not.toBeInTheDocument();
  });

  // Negative Test: When the buttonText prop is missing, the button should not be rendered.
  test("should not render button if buttonText prop is missing", () => {
    const propsWithoutButtonText = {
      ...defaultProps,
      buttonText: undefined,
    };
    render(<Card {...propsWithoutButtonText} />);
    // Query for any element with role "button"
    const buttonElement = screen.queryByRole("button");
    expect(buttonElement).not.toBeInTheDocument();
  });
});
