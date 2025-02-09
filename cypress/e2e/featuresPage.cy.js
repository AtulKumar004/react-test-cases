// cypress/e2e/featuresPage.cy.js

describe("Features Page E2E Tests", () => {
    // Visit the features page before each test
    beforeEach(() => {
      // Adjust the URL if your features page is located elsewhere
      cy.visit("http://localhost:3000/");
    });
  
    it("Should render feature cards with title, description, and icon", () => {
      // Assume that each feature card has a data-testid="feature-card"
      cy.get("[data-testid='feature-card']").should("have.length.greaterThan", 0);
  
      // For each feature card, check that it contains an image, title and description
      cy.get("[data-testid='feature-card']").each(($card) => {
        // Within the card, find the image element and verify its src attribute is not empty.
        cy.wrap($card)
          .find("img")
          .should("exist")
          .and(($img) => {
            expect($img.attr("src")).to.be.a("string").and.not.be.empty;
          });
  
        // Check that a title (for example, rendered as a heading or element with a specific class) exists.
        cy.wrap($card)
          .contains(/.+/) // at least some text should be present
          .should("exist");
  
        // Optionally, check that the description element exists (assuming a <p> tag or a class)
        cy.wrap($card).find("p, .description").should("exist");
      });
    });
  
    it("Should render the FeaturesSection with its expected elements", () => {
      // Check that the FeaturesSection title exists
      cy.get("[data-testid='features-section-title']")
        .should("exist")
        .and("not.be.empty");
  
      // Check that the FeaturesSection description exists
      cy.get("[data-testid='features-section-description']")
        .should("exist")
        .and("not.be.empty");
  
      // Check that the container for feature cards exists and has the responsive grid class
      cy.get("[data-testid='feature-card-container']")
        .should("exist")
        .and("have.class", "my-grid");
  
      // Check that the "View All Features" button exists
      cy.get("[data-testid='view-all-features']").should("exist");
    });
  
    it("Should have feature cards placed as per UI design", () => {
      // Check the first feature card for the expected classes and order of elements.
      cy.get("[data-testid='feature-card']").first().within(() => {
        // Check container classes
        cy.root().should("have.class", "flex")
          .and("have.class", "flex-col")
          .and("have.class", "items-start")
          .and("have.class", "p-4")
          .and("have.class", "rounded");
  
        // Check the icon image's classes
        cy.get("img")
          .should("have.class", "w-12")
          .and("have.class", "h-12")
          .and("have.class", "mb-3");
  
        // Check the title's classes (adjust the selector if needed, e.g. h3 or .title)
        cy.contains(/.+/) // assuming the title is not empty text
          .should("have.class", "font-semibold")
          .and("have.class", "mb-2");
  
        // Check the description's classes (adjust the selector if needed, e.g. p or .description)
        cy.get("p, .description")
          .should("have.class", "text-sm")
          .and("have.class", "text-gray-600");
      });
  
      // Optionally, verify the order of elements inside the card
      cy.get("[data-testid='feature-card']").first().then(($card) => {
        const children = $card.children();
        expect(children.length).to.equal(3);
        // Assuming the first child is the image, the second the title, and the third the description:
        cy.wrap(children[0]).should("match", "img");
        // For title and description, you may check that they contain text
        cy.wrap(children[1]).invoke("text").should("not.be.empty");
        cy.wrap(children[2]).invoke("text").should("not.be.empty");
      });
    });
  
    it("Feature button should have hover effect", () => {
      // Check that the button has the appropriate hover classes
      cy.get("[data-testid='view-all-features']")
        .should("have.class", "hover:bg-gradient-to-r")
        .and("have.class", "hover:from-[#4100a3]")
        .and("have.class", "hover:to-[#0d52ff]")
        .and("have.class", "hover:shadow-lg")
        .and("have.class", "hover:transition-all");
  
      // Optionally, trigger a hover event (this may not visually change much in tests, but it confirms interaction)
      cy.get("[data-testid='view-all-features']").trigger("mouseover");
    });
  
    it("Should be responsive for mobile and desktop screens", () => {
      // Test for desktop viewport
      cy.viewport(1280, 720);
      cy.get("[data-testid='feature-card-container']").should("have.class", "my-grid");
  
      // Test for mobile viewport
      cy.viewport(375, 667);
      cy.get("[data-testid='feature-card-container']").should("have.class", "my-grid");
      // You could add more assertions here if your UI changes between viewports.
    });
  
    
  });
  