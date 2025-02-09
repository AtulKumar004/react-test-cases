import React from "react";
import CustomerReviewsSection from "../../src/components/CustomerReviewsSection/CustomerReviewsSection";
import { mount } from "cypress/react";
import { reviews } from "../../src/dist/data";

describe("customerReview.cy.jsx", () => {
  it("does not render when the reviews array is empty", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<CustomerReviewsSection reviews={[]} />);
    cy.get('[data-testid="customer_review"]').should("not.exist");
  });
  it("renders when the reviews array is not empty", () => {
    // Create a sample non-empty reviews array

    // Mount the component with a valid reviews array
    mount(<CustomerReviewsSection reviews={reviews} />);

    // Assert that the container element is rendered
    cy.get('[data-testid="customer_review"]').should("exist");

    cy.get('[data-testid="cards-component"]')
      .children()
      .should("have.length", reviews.length);
  });
});
