
import "cypress-real-events";
describe('Announcement Bar Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should exist on page load', () => {
    cy.get('[data-testid="announcement_bar"]').should('exist');
  });

  it('should have centered text, black background, and white text', () => {
    cy.get('[data-testid="announcement_bar"]')
      .should('have.css', 'text-align', 'center')
      .and('have.css', 'background-color', 'rgb(0, 0, 0)') // Black background
      .and('have.css', 'color', 'rgb(255, 255, 255)'); // White text
  });

  it('should hide with a transition when scrolling down', () => {
    cy.get('[data-testid="announcement_bar"]').should('be.visible');
    cy.scrollTo(0, 100);
    cy.wait(400);
    cy.get('[data-testid="announcement_bar"]').then(($el) => {
      const rect = $el[0].getBoundingClientRect();
      expect(rect.bottom).to.be.lessThan(0);
    });
    cy.get('[data-testid="announcement_bar"]').should(($el) => {
      const transform = $el.css('transform');
      expect(transform).to.include('matrix');
    });
  });

  // it('when hover it , Background color should change', () => {
  //   cy.get('[data-testid="announcement_bar"]')
  //   .should('have.css', 'background-color', 'rgb(0, 0, 0)')
  //   .realHover()
  //   .wait(500) //Temporary wait - find a better solution
  //   .should('have.css', 'background-color', 'rgb(13, 82, 255)')
  //   .realMouseOut()
  //   .wait(500) //Temporary wait - find a better solution
  //   .should('have.css', 'background-color', 'rgb(0, 0, 0)');

  // })

  // ----------- NEGATIVE TEST CASES ----------- //

  it('should not hide when the page is not scrolled', () => {
    cy.get('[data-testid="announcement_bar"]').should('be.visible');

    // Wait to ensure no transition happens
    cy.wait(400);

    // It should still be visible because no scroll occurred
    cy.get('[data-testid="announcement_bar"]').should('be.visible');
  });

  it('should not hide when scrolled less than 50px', () => {
    cy.get('[data-testid="announcement_bar"]').should('be.visible');

    // Scroll just below the threshold (e.g., 30px)
    cy.scrollTo(0, 30);
    cy.wait(400);

    // The announcement bar should still be visible
    cy.get('[data-testid="announcement_bar"]').should('be.visible');
  });

  it('should  reappear when scrolled back up while still hidden', () => {
    cy.get('[data-testid="announcement_bar"]').should('be.visible');

    // Scroll down beyond 50px to hide the bar
    cy.scrollTo(0, 100);
    cy.wait(400);

    // Ensure it has moved out of view
    cy.get('[data-testid="announcement_bar"]').then(($el) => {
      const rect = $el[0].getBoundingClientRect();
      expect(rect.bottom).to.be.lessThan(0);
    });

    // Scroll back up
    cy.scrollTo(0, 0);
    cy.wait(400);

    // The bar should still be hidden (this depends on your implementation)
    cy.get('[data-testid="announcement_bar"]').should('be.visible');
  });


  it('should not reappear if the scroll event listener is removed', () => {
    cy.get('[data-testid="announcement_bar"]').should('be.visible');

    cy.window().then((win) => {
      win.removeEventListener('scroll', win.handleScroll);
    });

    cy.scrollTo(0, 100);
    cy.wait(400);

    // The announcement bar should still be visible since the event was removed
    cy.get('[data-testid="announcement_bar"]').should('be.visible');
  });
});

describe('Navbar Functionality Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  // Test 1: Sticky navbar on scroll
  it('should stick to top when scrolling down', () => {
    cy.get('[data-testid="navbar-container"]').should('be.visible');


    cy.get('[data-testid="navbar-container"]').should('have.css', 'position', 'sticky')
      .and('have.css', 'top', '0px').and('have.css', 'z-index', '50');
  });

  // // Test 2: Padding for large devices
  // it('should have correct padding on large screens', () => {
  //   cy.viewport(1440, 900); // Set viewport size

  //   cy.get('[data-testid="navbar-container"]').then(($el) => {
  //     const containerWidth = $el[0].getBoundingClientRect().width; // Get actual width
  //     const expectedPadding = containerWidth * 0.10; // 10% of container width
  //     // console.log($el[0].getBoundingClientRect())
  //     cy.wrap($el)
  //       .invoke('css', 'padding-right') // Extract padding-right value
  //       .then((paddingRight) => {
  //         const paddingValue = parseFloat(paddingRight); // Convert '142.297px' to a number
  //         expect(paddingValue).to.be.closeTo(expectedPadding, 10); // Allow a 1px tolerance
  //       });
  //   });
  // });
  // Device Type	Viewport (Width x Height)
  // Large Screen (4K/Ultra-wide)	cy.viewport(2560, 1440)
  // Desktop (Full HD)	cy.viewport(1920, 1080)
  // Laptop (Typical)	cy.viewport(1440, 900)
  // Tablet (iPad Pro)	cy.viewport(1024, 1366)
  // Tablet (Standard)	cy.viewport(768, 1024)
  // Mobile (Large)	cy.viewport(414, 896) (iPhone XR, iPhone 11 Pro Max)
  // Mobile (Standard)	cy.viewport(375, 812) (iPhone X, iPhone 12, 13, 14 Pro)
  // Mobile (Small)	cy.viewport(320, 568) (iPhone SE, iPhone 5/5S)

  // Test 2: Navbar sections visibility
  it('should display all three sections of navbar', () => {
    cy.viewport(1440, 900);
    cy.get('[data-testid="navbar-container"]').within(() => {
      cy.get('.logo').should('be.visible');
      cy.get('.nav-items').should('be.visible');
      cy.get('.sign-in-btn').should('be.visible');
      cy.get('.hamburger').should('be.not.visible');
    });
    cy.viewport(768, 900);
    // cy.viewport(375, 812)
    cy.get('[data-testid="navbar-container"]').within(() => {
      cy.get('.logo').should('be.visible');
      cy.get('.nav-items').should('be.not.visible');
      cy.get('.sign-in-btn').should('be.not.visible');
      cy.get('.hamburger').should('be.visible');
    });

  });






  // // Test 6: Navigation routing


  it('should display all menu items correctly', () => {
    cy.viewport(1440, 900);
    const menuItems = [
      { label: 'Modules', path: '/modules' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Partners', path: '/partners' },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Resources', path: '/resources' },
    ];

    cy.get('[data-testid="navbar-container"]').should('be.visible');

    menuItems.forEach((item) => {
      cy.contains('nav.nav-items', item.label).should('exist');
      cy.get(`nav.nav-items a[href="${item.path}"]`).should('exist');
    });
  });

  it('should navigate to correct pages on click', () => {
    cy.viewport(1440, 900);
    const menuItems = [
      { label: 'Modules', path: '/modules' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Partners', path: '/partners' },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Resources', path: '/resources' },
    ];

    menuItems.forEach((item) => {
      cy.get(`nav.nav-items a[href="${item.path}"]`).click();
      cy.url().should('include', item.path);
      cy.go('back'); // Navigate back to test the next item
    });
  });

  // it('should display and hide the mobile menu', () => {
  //   cy.viewport(375, 812); // Mobile viewport
  //   cy.get('.hamburger').click(); // Open menu
  //   cy.get('nav.nav-items').should('be.visible');
  //   cy.get('.hamburger').click(); // Close menu
  //   cy.get('nav.nav-items').should('not.be.visible');
  // });

  // it('should show the full menu on large screens', () => {
  //   cy.viewport(1440, 900); // Large screen
  //   cy.get('nav.nav-items').should('be.visible');
  // });
});


// // Additional test for hamburger menu functionality
// it('should open and close mobile menu when clicking hamburger icon', () => {
//   cy.viewport(768, 1024);
//   cy.get('.hamburger-icon').click();
//   cy.get('.mobile-menu').should('be.visible');

//   // Test mobile menu navigation
//   cy.get('.mobile-menu').within(() => {
//     cy.get('[data-cy=home]').click();
//     cy.url().should('include', '/');
//   });
// });


