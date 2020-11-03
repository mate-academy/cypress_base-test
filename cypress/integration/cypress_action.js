describe('Basic level', () => {
    before(() => {
        cy.visit('https://demoqa.com/login');
    });
    it('Login', () => {
        cy.get('#userName').type('DenisQA');
        cy.get('#password').type('QWEqwe123!');
        cy.get('#login').click();

        cy.get('#userName-value').contains('Denis').should('exist');

        cy.get('#gotoStore').click();

        cy.get('#searchBox').type('Speaking');
        cy.get('.rt-tr.-odd').contains('Speaking JavaScript').should('exist');
        cy.get('.mr-2').click();
        cy.get('.text-right.fullButton').click();

        cy.on('window:alert 1', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
           })

        cy.get(':nth-child(6) > .element-list > .menu-list > #item-3').click();
        cy.get('[id="see-book-Speaking JavaScript"]').contains('Speaking JavaScript').should('exist')
        cy.get('#delete-record-undefined').click()
        cy.get('#closeSmallModal-ok').click()

        cy.on('window:alert 2', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
           })
    }); 
}); 
