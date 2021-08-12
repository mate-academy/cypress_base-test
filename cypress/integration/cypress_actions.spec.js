/// <reference types="cypress" />

describe ('login', () => {
    beforeEach('open login page', () => {
        cy.visit('https://demoqa.com/login');
        cy.get('#userName').type('LolaRun');
        cy.get('#password').type('lol@Run99');
        cy.get('#login').click();

        cy.get('#userName-value').should('contain.text', 'LolaRun')
    });

    it('Navigate to book list', () => {
        // Navigate to books list
        cy.get('#gotoStore').click();

        // Type into search field “Speaking JavaScript”
        cy.get('#searchBox').type('Speaking JavaScript');

        // Click on ‘Speaking JavaScript’ link
        cy.get('[id="see-book-Speaking JavaScript"]').click();

        // Click on [Add To Your Collection] button on Speaking JavaScript preview page
        cy.contains('#addNewRecordButton', 'Add To Your Collection').click();

        // Confirm popup. You can do it with cy.on()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
           })
    });

    it('Open your profile page', () => {
        cy.visit('https://demoqa.com/profile');
        
        // Assert ‘Speaking JavaScript’ in your shopping list
        cy.get('[id="see-book-Speaking JavaScript"]').should('exist');
        
        // Delete Speaking JavaScript book from your list
        cy.get('#delete-record-undefined').click();
        cy.get('#closeSmallModal-ok').click();
    });
});
