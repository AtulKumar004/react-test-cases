/// <reference types="cypress" />

describe('Footer Component Tests', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });
  
    it('should display the footer component', () => {
      cy.get('[data-testid= "footer-container"]').should('be.visible');
    });
  
    it('should have the correct copyright text', () => {
      cy.get('.copy-rigth').should('contain.text', 'Copyright © 2025 - Quote Ninja, Inc.');
      cy.get('.copy-rigth').should('contain.text', 'Marketing by Kokopelli Agency');
    });
  
    it('should have working navigation links', () => {
      const links = [
        '/knowledge-base',
        '/chat',
        '/quotes',
        '/pricing',
        '/partners',
        '/about',
        '/contact',
        '/installation-setup',
        '/configuring-b2b-ninja',
        '/quote-follow-up-template',
        '/view-quote-history',
        '/using-b2b-ninja',
        '/using-custom-shipping',
        '/all-about-shipping',
        '/api-documentation',
        '/security-overview',
        '/gdpr-policy',
        '/privacy-policy',
        '/terms-of-service',
      ];
  
      links.forEach((link) => {
        cy.get(`a[href='${link}']`).should('be.visible');
      });
    });
  
    it('should check Knowledge Base button functionality', () => {
      cy.get("a[href='/knowledge-base']").click();
      cy.url().should('include', '/knowledge-base');
    });
  
    it('should check Chat with us button functionality', () => {
      cy.get("a[href='/chat']").click();
      cy.url().should('include', '/chat');
    });
  
    it('should check footer visibility across different viewports', () => {
        const viewports = [['iphone-6'], ['ipad-2'], [1024, 768]];
      
      viewports.forEach((viewport) => {
        cy.viewport(...viewport);
        cy.get('[data-testid= "footer-container"]').should('be.visible');
      });
    });
  
    
 
  

 
  
    
  });
  