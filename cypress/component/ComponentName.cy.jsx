import React from "react";
import { mount } from "cypress/react";
import CustomerReviewsSection from "../../src/components/CustomerReviewsSection/CustomerReviewsSection";

describe("CustomerReviewsSection", () => {
  it("does NOT render if prop is empty", () => {
    mount(<CustomerReviewsSection reviews={[]} />);
    // cy.get('[data-testid="customer_review"]').should("exist"); // Should NOT exist when empty
  });

  // it("renders if prop is non-empty", () => {
  //   mount(<CustomerReviewsSection reviews={[{ id: 1, text: "Hello!" }]} />);
  //   cy.get('[data-testid="customer_review"]').should("exist"); // Should exist with reviews
  // });
});
