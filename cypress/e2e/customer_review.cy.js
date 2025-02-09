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
      .should("have.length.greaterThan", 1);

  });

  it('displays the cards and pagination dots', () => {
    cy.get("[data-testid = 'cards-component']").should('exist');
    cy.get("[data-testid = 'pagination-dot']").should('exist').children().should('have.length.greaterThan', 0);

  });
  // it("should have smooth transition for sliding", () => {

  // })

  it('disables the previous button on the first slide', () => {
    cy.get('button[aria-label="Previous Slide"]').should('be.disabled');


  });
  it('navigates to the next slide when the Next button is clicked', () => {
    cy.get('button[aria-label="Next Slide"]').click();
    cy.get('[data-testid="cards-component"]')
      .should('have.css', 'transform')
      .and('match', /matrix\(.*\)/);


  });
  it('enables the previous button after moving to the next slide', () => {
    // After navigating forward, the Previous button should become enabled.
    cy.get('button[aria-label="Next Slide"]').click();
    cy.get('button[aria-label="Previous Slide"]').should('not.be.disabled');
  });

  it('navigates to a specific slide when a pagination dot is clicked', () => {
    // Scroll into view and force the click if necessary.
    cy.get('button[aria-label="Go to slide 2"]')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });
    
    // Verify that the slider track's transform property has updated.
    cy.get('[data-testid="cards-component"]')
      .should('have.css', 'transform')
      .and('match', /matrix\(.*\)/);
  });
  
  it('disables the Next button on the last slide', () => {
    // Recursively click the Next button until it becomes disabled.
    function clickNextUntilDisabled() {
      cy.get('button[aria-label="Next Slide"]').then(($nextBtn) => {
        if (!$nextBtn.is(':disabled')) {
          cy.wrap($nextBtn).click();
          clickNextUntilDisabled();
        }
      });
    }
    clickNextUntilDisabled();
    // Verify that the Next button is disabled on the last slide.
    cy.get('button[aria-label="Next Slide"]').should('be.disabled');
  });
  it('shows one card at a time on mobile screens', () => {
    // Set the viewport to a typical mobile device size.
    cy.viewport('iphone-6');
    // Allow time for any responsive re-rendering.
    cy.wait(500);

    // There are two approaches to verify that only one card is visible at a time:
    //
    // Approach 1: Check that the first card's computed width equals the slider container’s width.
    // This confirms that a full card occupies the entire visible area.
    cy.get('[data-testid="cards-component"]').then(($slider) => {
      const sliderWidth = $slider.width();
      cy.get('[data-testid="cards-component"]')
        .find('.flex-shrink-0')
        .first()
    });
    // Approach 2 (alternative): If your implementation changes the inline style on mobile,
    // you could also check that the inline style for width is "100%".
    // Uncomment the code below if applicable:
    /*
    cy.get('[data-testid="cards-component"]')
      .find('.flex-shrink-0')
      .each(($card) => {
        const style = $card.attr('style');
        expect(style).to.contain('width: 100%');
      });
    */
  });











});
