/// <reference types="cypress" />

describe('User should have the ability',() => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/login');
      cy.get('#userName').type('Lilian');
      cy.get('#password').type('Qwerty123!');
      cy.get('#login').click();
      cy.get('#userName-value').should('contain', 'Lilian');
    });
  
    it('Navigate to book list', () => {
      cy.get('#gotoStore').click();
      cy.get('#searchBox').type('Speaking JavaScript');
      cy.get('[id="see-book-Speaking JavaScript"]').click();
      cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
           });
    });
    
    it('Go to profile', () => {
      cy.visit('https://demoqa.com/profile');
      cy.get('[id="see-book-Speaking JavaScript"]').should('exist');
      cy.get('#delete-record-undefined').click();
      cy.get('#closeSmallModal-ok').click();
    });
});

  