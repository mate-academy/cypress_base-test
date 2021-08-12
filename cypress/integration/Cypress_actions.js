/// <reference types="cypress" />
describe('', () => {
    beforeEach('Login successfully', () => {
        cy.visit('https://demoqa.com/login');
        cy.get('#userName').type('Kito');
        cy.get('#password').type('22477Zz*5');
        cy.get('#login').click();
        cy.get('#userName-value').contains('Kito').should('exist');
    });
    
    it('Book Store openning and finding a book', () => {
        cy.contains('#item-2', 'Book Store').click();
        cy.get('#searchBox').type('Speaking JavaScript');
        cy.get('.rt-tr.-odd').contains('Axel Rauschmayer').should('exist');
        cy.get('[id="see-book-Speaking JavaScript"]').click();
        cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
        cy.on('windows:alert', (alert) => {
            expect(alert).to.equal('Book added to your collection.');
        });
    });

    it('Openning a profile page', () => {
        cy.visit('https://demoqa.com/profile');
        cy.get('.rt-tr.-odd').contains('Axel Rauschmayer').should('exist');
        cy.get('#delete-record-undefined').click();
        cy.get('#closeSmallModal-ok').click();
    });
});