describe('Homework #44, Basic level', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/login');
        cy.get('#userName').type('IronLady');
        cy.get('#password').type('Qw12345!');
        cy.get('#login').click();
        cy.wait(3000);
    });
    it('01. Part 1', () => {
        cy.get('#userName-value').contains('IronLady').should('exist');

        cy.get('#gotoStore').click();

        cy.get('#searchBox').type('Speaking');
        cy.get('.rt-tr.-odd').contains('Speaking JavaScript').should('exist');
        cy.get('[id="see-book-Speaking JavaScript"]').click();
        cy.get('.text-right.fullButton').click();
   
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
           })
        });
    it('02. Part 2', () => {    
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-3').click();
        cy.get('[id="see-book-Speaking JavaScript"]').contains('Speaking JavaScript').should('exist')
        cy.get('#delete-record-undefined').click()
        cy.get('.modal-content #closeSmallModal-ok').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
           })
    }); 
    
});