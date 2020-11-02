/// <reference types='cypress' />

describe('Basic', () => {
    beforeEach('Login', () => {
        cy.visit('https://demoqa.com/login');
        cy.get('[placeholder="UserName"]').type('JohnNgo');
        cy.get('[placeholder="Password"]').type('@Bc12345');
        cy.get('#login').click();
    });

    it('Test 1', () => {
        cy.get('#userName-value').contains('JohnNgo').should('exist');

        cy.get('.element-list.collapse.show').contains('Book Store').click();

        cy.get('[placeholder="Type to search"]').type('Speaking JavaScript');

        cy.get('[href="/books?book=9781449365035"]').click();

        cy.get('.btn.btn-primary').contains('Add To Your Collection').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book added to your collection.`);
        });
    });

    it('Part 2', () => {
        cy.get('#userName-value').contains('JohnNgo').should('exist');

        cy.get('.element-list.collapse.show').contains('Profile').click();

        cy.get('.col-12.mt-4.col-md-6').contains('Speaking JavaScript').should('exist');

        cy.get('[title="Delete"]').click();

        cy.get('#closeSmallModal-ok').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book deleted.`);
        });
    });
});