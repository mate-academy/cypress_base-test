/// <reference types="cypress" />

describe('', () => {
    beforeEach(function () {
        cy.visit("/login");
    });

    it('Login', () => {
        cy.get('#userName').type('Fat_Cartman');
        cy.get('#password').type('1qaz!QAZ{enter}');
        cy.get('#userName-value').contains('Fat_Cartman').should('exist');
    
        cy.visit("/books");
        cy.get('#searchBox').type('Speaking JavaScript');
        cy.contains('[href="/books?book=9781449365035"]', 'Speaking JavaScript').click();
        cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
        cy.on('window:alert_1', (str) => {
            expect(str).to.equal(`Book added to your collection.`);
        });

        cy.visit("/profile");
        cy.get('#delete-record-undefined').click();
        cy.get('#closeSmallModal-ok').click();
        cy.on('window:alert_2', (str) => {
            expect(str).to.equal('Book deleted.');
        });
    });
});