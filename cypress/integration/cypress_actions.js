/// <reference types="cypress" />

describe('Test to add and delete book from collection', () => {
  before(function () {
      cy.visit('https://demoqa.com/login');
  });

  it('Add book to my collection', () => {
    cy.get('#userName').type('BillyG');
    cy.get('#password').type('P@ssword1234{enter}');
    cy.get('#userName-value').should('contain', 'BillyG');
    cy.url().should('include', '/profile');
    cy.contains('#item-2', 'Book Store').click();
    cy.get('#searchBox').type('Speaking JavaScript');
    cy.get('[id="see-book-Speaking JavaScript"]').click();
    cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Book added to your collection.`)
    });
  });

  it('Delete book from collection', () => {    
    cy.visit('https://demoqa.com/login');
    cy.get('#userName').type('BillyG');
    cy.get('#password').type('P@ssword1234{enter}');
    cy.get('#userName-value').should('contain', 'BillyG');
    cy.contains('#item-3', 'Profile').click();
    cy.contains('.rt-tr-group', 'Speaking JavaScript')
      .find('#delete-record-undefined').click();
    cy.get('#closeSmallModal-ok').click();
      cy.on('window:alert 2', (str) => {
        expect(str).to.equal('Book deleted.');
      });
    });
  });