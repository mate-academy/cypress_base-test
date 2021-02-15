/// <reference types='cypress' />

describe ('Basic Homework | Yurii Parfinenko', () => {

    const loginUrl = 'https://demoqa.com/login';
    
    it('Login and user data validation', () => {
        cy.visit(loginUrl);
        cy.get('#userName-value').should('contain', 'irkonikovich');
    });

    it('Book Store Search', () => {
        cy.contains('#item-2', 'Book Store').click();
        cy.get('#searchBox').type('Speaking JavaScript{enter}');
        cy.contains('.mr-2', 'Speaking JavaScript').click();
        cy.contains('[type="button"]', 'Add To Your Collection').click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('Book added to your collection.');
        });
    });

    it('Profile Book Delete', () => {
        cy.contains('#item-3', 'Profile').click();
        cy.contains('.mr-2', 'Speaking JavaScript').should('contain', 'Speaking JavaScript');
        cy.get('[title="Delete"]').click();
        cy.get('#closeSmallModal-ok').click();
        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('Book deleted.');
        });
    });
});
