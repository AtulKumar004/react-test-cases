import "cypress-real-events";
// cypress/support/e2e.js
import '@testing-library/cypress/add-commands';

// Optionally, your other custom commands...
// import './commands';

import {
  customer_review_section_description,
  customer_review_section_heading,
} from "../../src/dist/data";

describe("Customer Review Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should exist on page load", () => {
    cy.get("[data-testid='customer_review']").should("exist");
  });

  it("should have currect layout", () => {
    cy.get("[data-testid='customer_review_section_title']").should(
      "have.text",
      customer_review_section_heading
    );
    cy.get("[data-testid='customer_review_section_description']").should(
      "have.text",
      customer_review_section_description
    );
    cy.get("[data-testid='customer_review_section_slider_cont']").should(
      "exist"
    );
    cy.get("[data-testid='customer_review_section_slider_cont']")
    .should("exist")
    .find("button")
    .should("have.length", 5);
  
  });

  it("should be render only if , data is passed", () => {
    cy.get("[data-testid='customer_review_section_slider_cont']").should("exist");
    cy.get("[data-testid='customer_review_section_slider_cont']").find("button").should("have.length", 5);
  }); 
});
