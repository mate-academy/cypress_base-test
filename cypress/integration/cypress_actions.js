describe('Homework #44, Basic level', () => {
    before(() => {
        cy.visit('https://demoqa.com/login');
    });
    it('01. Login', () => {
        cy.get('#userName').type('IronLady');
        cy.get('#password').type('Qw12345!');
        cy.get('#login').click();

        cy.get('#userName-value').contains('IronLady').should('exist');

        cy.get('#gotoStore').click();

        cy.get('#searchBox').type('Speaking');
        cy.get('.rt-tr.-odd').contains('Speaking JavaScript').should('exist');
        cy.get('[id="see-book-Speaking JavaScript"]').click();
        cy.get('.text-right.fullButton').click();
   
        cy.on('window:alert 1', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
           })

        cy.get(':nth-child(6) > .element-list > .menu-list > #item-3').click();
        cy.get('[id="see-book-Speaking JavaScript"]').contains('Speaking JavaScript').should('exist')
        cy.get('#delete-record-undefined').click()
        cy.get('.modal-content #closeSmallModal-ok').click()

        cy.on('window:alert 2', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
           })


    }); 
    
});