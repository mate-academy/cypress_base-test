
describe ('Homework', () => {
   
    it ('Test1', () => {
        cy.visit('https://demoqa.com/profile')
        cy.get('#userName-value').contains('pashko').should('exist');

        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').click();
        cy.get('#searchBox').type('Speaking JavaScript');
        cy.get('[href="/books?book=9781449365035"]').click();
        cy.get('.text-right > #addNewRecordButton').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
        });
    });
    it ('Test2', () => {
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-3').click();
        cy.get('.ReactTable').contains('Speaking JavaScript').should('exist');
        cy.get('#delete-record-undefined > svg > path').click();
        cy.get('#closeSmallModal-ok').click();
        
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book deleted.`)
        });
    });
}); 