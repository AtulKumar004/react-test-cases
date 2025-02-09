// cypress/component/CaseStudiesSection.cy.jsx
import React from "react";
import { mount } from "@cypress/react"; // or "@cypress/react18"
import CaseStudiesSection from "../../src/components/CaseStudiesSection/CaseStudiesSection";// adjust the path

describe("CaseStudiesSection Component", () => {
  const props = {
    title: "Real Case Studies",
    description: `Before you try B2B Ninja, learn about how our customers use B2B Ninja to
            boost sales, convert traffic, and save time.`,
  };

  it("should render the CaseStudiesSection component", () => {
    mount(<CaseStudiesSection />);
    cy.get("[data-testid='case-studies-section']").should("exist");
  });

  it("should have title and description section", () => {
    mount(<CaseStudiesSection {...props} />);
    // Assuming the title is rendered in one of the heading tags:
    cy.get("[data-testid='case_study_title'")
     
      .should("exist").and("contain.text", props.title);;
    // Verify the description using the provided test id:
    cy.get("[data-testid='case_study_section_description']")
      .should("exist")
      
  });

  it("should render two cards in a row for desktop and 1 card for mobile", () => {
    mount(<CaseStudiesSection />);
    cy.get("[data-testid='case_study_card_container']")
      .should("exist")
      .and("have.class", "grid")
      .and("have.class", "grid-cols-1")
      .and("have.class", "md:grid-cols-2")
      .and("have.class", "gap-6");
  });

  it("should render any number of cards without breaking the layout", () => {
    mount(<CaseStudiesSection />);
    cy.get("[data-testid='case_study_card_container']")
      .should("exist")
      .and("have.class", "grid")
      .and("have.class", "grid-cols-1")
      .and("have.class", "md:grid-cols-2")
      .and("have.class", "gap-6");
  });

  // Optionally, you can simulate different viewports to test responsiveness:
  it("renders correctly on laptop view (viewport width: 1440px)", () => {
    cy.viewport(1440, 900);
    mount(<CaseStudiesSection />);
    cy.get("[data-testid='case_study_card_container']")
      .should("exist")
      .and("have.class", "grid-cols-1")
      .and("have.class", "md:grid-cols-2")
      .and("have.class", "gap-6");
  });
});
