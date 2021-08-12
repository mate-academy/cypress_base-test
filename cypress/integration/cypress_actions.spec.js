describe('', () => {
    beforeEach(function () {
        cy.visit('https://demoqa.com/login');
    });


    it('Automation test', () => {
        cy.get('#userName').type('sygigo');
        cy.get('#password').type('Password!123{enter}');
        cy.url().should('include', '/profile');
        cy.get('#userName-value').should('contain', 'sygigo')
        cy.contains('#item-2', 'Book Store').click();
        cy.get('#searchBox').type('Speaking JavaScript');
        cy.get('[id="see-book-Speaking JavaScript"]').click();
        cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
        cy.on('window:alert 1', (str) => {
            expect(str).to.equal('Book added to your collection.');
        });
        cy.contains('#item-3', 'Profile').click();
        cy.get('#delete-record-undefined').click();
        cy.get('#closeSmallModal-ok').click();
        cy.on('window:alert 2', (str) => {
            expect(str).to.equal('Book deleted.');
        });
    });
});
