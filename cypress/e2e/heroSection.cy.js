// cypress/e2e/heroSection.cy.js

describe("HeroSection E2E Tests", () => {
    // Visit the page that renders the HeroSection component.
    // Adjust the URL if your HeroSection is on a different route.
    beforeEach(() => {
        cy.visit("http://localhost:3000/");

    });

    // ----------------------------
    // Positive Test Cases
    // ----------------------------

    it("should render the main Hero Banner with background image and gradient", () => {
        // The main hero banner is rendered inside a Section element
        // with classes including the gradient and overflow-hidden.
        cy.get("[ data-testid= 'hero-section-container']")
            .first()
            .should("have.class", "relative")
            .and("have.class", "bg-gradient-to-r")
            .and("have.class", "from-purple-800")
            .and("have.class", "to-purple-600")
            .and("have.class", "overflow-hidden");

        // Verify that the inline style includes a background image (from HeroBG.svg)
        cy.get("[ data-testid= 'hero-section-container']")
            .first()
            .invoke("attr", "style")
            .should("contain", "background-image")
            .and("contain", "url(");
    });

    it("should render the main heading and subheading with correct text", () => {
        // The main heading is rendered as an h1 with the following text:
        cy.contains("Revolutionize Your Quote Process.").should("exist");

        // The subheading text:
        cy.contains("Save Time. Find Bigger Deals.").should("exist");
    });

    it("should render the VIEW DEMO button with correct text and test id", () => {
        // The button is rendered as a styled div with data-testid="view_demo_btn"
        cy.get("[data-testid='view_demo_btn']")
            .should("exist")
            .and("contain.text", "VIEW DEMO")
            .and("contain.text", ">>");
    });

    it("should render the hero illustration image with correct alt text", () => {
        // The hero image is rendered with alt text "Hero Illustration"
        cy.get("img")
            .filter("[alt='Hero Illustration']")
            .should("exist")
            .and("have.class", "object-contain")
            // Optionally, ensure the image has a responsive sizing class:
            .and("have.class", "max-w-md");
    });

    it("should render the logo strip with all partner logos", () => {
        // The logo strip appears in the white background Section.
        // Verify that each partner logo image (by its alt text) is present.
        const logos = [
            "Bulk Bookstore",
            "Fujitsu",
            "Rescue Essentials",
            "First Place Supply",
            "Grand Entry Doors",
            "ALB",
        ];
        logos.forEach((altText) => {
            cy.get(`img[alt="${altText}"]`).should("exist");
        });
    });

    it("should render the BigCommerce Preferred section correctly", () => {
        // Verify the text blurb and heading.
        cy.contains("BigCommerce Prefers B2B Ninja").should("exist");
        cy.contains(
            "B2B Ninja is proud to be a BigCommerce Preferred App—a distinction"
        ).should("exist");

        // Verify the BigCommerce partner logo image exists with the correct alt text.
        cy.get("img[alt='BigCommerce Preferred Partner']")
            .should("exist")
            .and("have.class", "object-cover")
            .and("have.class", "h-36")
            .and("have.class", "w-36");
    });

    // ----------------------------
    // Negative Test Cases
    // ----------------------------

    it("should not render any element with a non-existent test id", () => {
        // Example negative test: verify that an element with a wrong test id is not present.
        cy.get("[data-testid='non_existent_element']").should("not.exist");
    });

    it("should not display incorrect or unexpected heading text", () => {
        // Verify that an incorrect heading text is not present.
        cy.contains("Incorrect Heading").should("not.exist");
    });

    it("should not render the demo button with wrong text", () => {
        // Verify that the demo button does not contain a wrong text.
        cy.get("[data-testid='view_demo_btn']").should("not.contain.text", "CLICK ME");
    });

    it("should ensure that all images have a valid (non-empty) src attribute", () => {
        // Loop through all img elements and check that the src attribute is not empty.
        cy.get("img").each(($img) => {
            cy.wrap($img)
                .invoke("attr", "src")
                .should("exist")
                .and("not.be.empty");
        });
    });

    // Optionally, if your "VIEW DEMO" button is supposed to trigger an action or navigation,
    // you can simulate a click and assert the resulting behavior.
    
});
