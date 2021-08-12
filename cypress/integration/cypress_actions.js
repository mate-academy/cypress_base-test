/// <reference types="cypress" />

describe('User should be able to', () => {
    beforeEach('login', () => {
        cy.visit('https://demoqa.com/login');
        cy.get('#userName').type('aboba123');
        cy.get('#password').type('Qwerty123!');
        cy.get('#login').click();
    });

    it('login with existing data', () => {
        cy.url().should('include', '/profile');
        cy.get('#userName-value').should('contain', 'aboba123');
    });

    it('add and delete a book', () => {
        cy.visit('https://demoqa.com/profile')
        cy.contains('#item-2', 'Book Store').click();
        cy.get('#searchBox').type('Learning JavaScript');
        cy.contains('.action-buttons', 'Learning JavaScript').click();
        cy.contains('.text-right', 'Add To Your Collection').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Book added to your collection.')
        });
        cy.contains('#item-3', 'Profile').click();
        cy.url().should('contain', 'https://demoqa.com/profile');
        cy.contains('.rt-tbody', 'Learning Javascript').should('exist');
        cy.get('#delete-record-undefined').click();
        cy.get('.modal-content').should('contain', 'Do you want to delete this book?');
        cy.get('#closeSmallModal-ok').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Book deleted.')
        });  
    });
});