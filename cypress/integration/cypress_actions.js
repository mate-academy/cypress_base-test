/// <reference types="cypress" />

describe('Test', () => {
    before(function () {
        cy.visit('https://demoqa.com/login');
    });
    
    it('Add book to my collection', () => {
        cy.get('#userName').type('Danylo');
        cy.get('#password').type('hkei#1!wSDa21{enter}');
        cy.get('#userName-value').should('contain', 'Danylo');
        cy.url().should('include', 'https://demoqa.com/profile');

        cy.contains('#item-2', 'Book Store').click();
        cy.get('#searchBox').type('Speaking JavaScript');
        cy.get('[href="/books?book=9781449365035"]').click();
        cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal(`Book added to your collection.`);
        });
    });

    it('Delete book from collection', () => {    
        cy.visit('https://demoqa.com/login');
        cy.get('#userName').type('Danylo');
        cy.get('#password').type('hkei#1!wSDa21{enter}');
        cy.get('#userName-value').should('contain', 'Danylo');
        cy.contains('#item-3', 'Profile').click();
        cy.get('.rt-tbody').should('contain', 'Speaking JavaScript');
        cy.contains('.rt-tr-group', 'Speaking JavaScript')
            .find('#delete-record-undefined').click();
        cy.get('#closeSmallModal-ok').click();
        cy.url().should('include', 'https://demoqa.com/profile');
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal(`Book deleted.`);
        });
    });
  });
