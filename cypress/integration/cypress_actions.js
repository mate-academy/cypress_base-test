/// <reference types="cypress" />

it('Login as your registered account', () => {
    cy.visit('https://demoqa.com/login');
    cy.get('#userName').type('Mamay888');
    cy.get('#password').type('Mamay6969&');
    cy.get('#login').click();
    cy.get('#userName-value').contains('Mamay888').should('exist');

    cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').click();

    cy.get('#searchBox').type('Speaking JavaScript');
    cy.get('[href="/books?book=9781449365035"]').click();
    cy.get('.text-right>#addNewRecordButton').click();

    cy.on('window:alert 1', (str) => {
        expect(str).to.equal(`Book added to your collection.`)
       });

    cy.get(':nth-child(6)>.element-list>.menu-list>#item-3>.text').click();
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)').contains('Speaking JavaScript').should(expect);
    cy.get('#delete-record-undefined > svg > path').click();
    cy.get('#closeSmallModal-ok').click();

    cy.on('window:alert 2', (str) => {
        expect(str).to.equal(`Book deleted.`)
       });




});

