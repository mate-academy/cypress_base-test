describe ('test_HW38', () => {
    beforeEach (() => {
        cy.visit('https://demoqa.com/login');
        cy.get('[placeholder="UserName"]').type('olka');
        cy.get('[placeholder="Password"]').type('Olka12345678!');
        cy.get('#login').click();
        cy.wait(1000);
    });
    it ('Adding book to collection', () => {
        cy.get('#userName-value').contains('olka').should('exist');
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').click();
        cy.get('#searchBox').type('Speaking JavaScript');
        cy.get('[href="/books?book=9781449365035"]').click();
        cy.get('.text-right > #addNewRecordButton').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
           })         
    });
    
    it ('Deletting book', () => {
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-3').click();
        cy.get('.rt-tbody').contains('Speaking JavaScript').should('exist');
        cy.get('#delete-record-undefined > svg > path').click();
        cy.get('#closeSmallModal-ok').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book deleted.`)
        });
    });
}); 