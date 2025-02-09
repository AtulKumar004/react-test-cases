// cypress/component/FeatureCard.cy.jsx
import React from "react";
import { mount } from "cypress/react";
import FeatureCard from "../../src/components/FeaturesSection/FeatureCard"; // adjust the path
import icon6 from "../../src/assest/featuresIcon/B2B-ninja-Features-S6.png"; // adjust the path

describe("FeatureCard Component", () => {
  const defaultProps = {
    title: "Support for Advanced Product Types",
    description:
      "Add multiple options and features to your products listed in B2B Ninja, so your customers get the right quote for the product they need.",
    icon: icon6,
  };

  it("Should render title, description, and icon", () => {
    mount(<FeatureCard {...defaultProps} />);
    // Check that the title and description texts exist
    cy.contains(defaultProps.title).should("exist");
    cy.contains(defaultProps.description).should("exist");
    // Check the image by using its alt attribute and verify the src
    cy.get(`img[alt="${defaultProps.title}"]`)
      .should("exist")
      .and("have.attr", "src", defaultProps.icon);
  });

  it("Should not render if any details is missing", () => {
    // Omit the icon property
    const incompleteProps = {
      title: "Support for Advanced Product Types",
      description:
        "Add multiple options and features to your products listed in B2B Ninja, so your customers get the right quote for the product they need.",
    };
    mount(<FeatureCard {...incompleteProps} />);
    // We expect that the component does not render the container with data-testid "feature-card"
    cy.get("[data-testid='feature-card']").should("not.exist");
  });

  it("Should be placed as per UI", () => {
    mount(<FeatureCard {...defaultProps} />);

    // Verify the container's classes
    cy.get("[data-testid='feature-card']")
      .should("have.class", "flex")
      .and("have.class", "flex-col")
      .and("have.class", "items-start")
      .and("have.class", "p-4")
      .and("have.class", "rounded");

    // Check the icon’s classes
    cy.get("[data-testid='feature-card']")
      .find("img")
      .should("have.class", "w-12")
      .and("have.class", "h-12")
      .and("have.class", "mb-3");

    // Check the title's classes
    cy.get("[data-testid='feature-card']")
      .contains(defaultProps.title)
      .should("have.class", "font-semibold")
      .and("have.class", "mb-2");

    // Check the description's classes
    cy.get("[data-testid='feature-card']")
      .contains(defaultProps.description)
      .should("have.class", "text-sm")
      .and("have.class", "text-gray-600");

    // Verify the order of elements by checking the container’s children
    cy.get("[data-testid='feature-card']").then(($card) => {
      const children = $card.children();
      expect(children.length).to.equal(3);
      // The first child should be the image (icon)
      cy.wrap(children[0]).should("match", "img");
      // The second child should contain the title text
      cy.wrap(children[1]).should("contain.text", defaultProps.title);
      // The third child should contain the description text
      cy.wrap(children[2]).should("contain.text", defaultProps.description);
    });
  });
});
