// cypress/component/Card.cy.jsx
import React from "react";
import { mount } from "@cypress/react"; // or "@cypress/react18" depending on your setup
import Card from "../../src/components/CaseStudiesSection/Card"; // adjust the path as needed

const defaultProps = {
  image: "test-image.jpg",
  title: "Test Title",
  description: "Test Description",
  buttonText: "Test Button",
  titleImg: "test-title-img.jpg",
};

describe("Card Component", () => {
  // ----------------------------
  // Positive Test Cases
  // ----------------------------

  it("should render the card component container", () => {
    mount(<Card {...defaultProps} />);
    // We assume the container has data-testid="card-container"
    cy.get("[data-testid='card-container']").should("exist");
  });

  it("should apply hover effect on mouse over", () => {
    mount(<Card {...defaultProps} />);
    // We assume the element that should receive the hover effect has data-testid="text-button"
    cy.get("[data-testid='text-button']")
      .should("have.class", "hover:scale-110")
      .and("have.class", "hover:text-xl")
      .and("have.class", "transition-all")
      .and("have.class", "hover:bg-[#0d52ff]");
  });



 
  it("should display the title image", () => {
    mount(<Card {...defaultProps} />);
    // We assume the title image element has data-testid="card-title-image"
    cy.get("[data-testid='card-title-image']")
      .should("exist")
      .and("have.attr", "src", defaultProps.titleImg);
  });

  

  // ----------------------------
  // Negative Test Cases
  // ----------------------------

  it("should not render title image if titleImg prop is missing", () => {
    const propsWithoutTitleImg = {
      ...defaultProps,
      titleImg: undefined,
    };
    mount(<Card {...propsWithoutTitleImg} />);
    cy.get("[data-testid='card-title-image']").should("not.exist");
  });

  it("should not render main image if image prop is missing", () => {
    const propsWithoutImage = {
      ...defaultProps,
      image: undefined,
    };
    mount(<Card {...propsWithoutImage} />);
    // We assume the main image (if rendered) would have data-testid="card-image"
    cy.get("[data-testid='card-image']").should("not.exist");
  });

  it("should not render button if buttonText prop is missing", () => {
    const propsWithoutButtonText = {
      ...defaultProps,
      buttonText: undefined,
    };
    mount(<Card {...propsWithoutButtonText} />);
    // Query for a button element (using its role)
    cy.get("button").should("not.exist");
  });
});
