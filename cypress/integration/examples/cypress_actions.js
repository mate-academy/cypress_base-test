it('Basic', () => {
  cy.visit('https://demoqa.com/login');
  cy.get('[placeholder="UserName"]').type('Alyona11');
  cy.get('[placeholder="Password"]').type('A123456789a!');
  cy.get('#login').click();

  cy.contains('#userName-value', 'Alyona11').should('exist');

  cy.get('.text-left button').click();

  cy.get('[placeholder="Type to search"]').type('Speaking JavaScript{enter}', {force: true});

  cy.get('[class="mr-2"]').click();

  cy.get('[class="text-right fullButton"]').click();

  cy.on('window:alert 1', (str) => {
    expect(str).to.equal(`Book added to your collection.`)
  });

  cy.get('.accordion > :nth-child(6) > :nth-child(2) > .menu-list > :nth-child(3)').click();

  cy.get('.rt-tbody > :nth-child(1)').should('exist');

  cy.get('#delete-record-undefined').click();

  cy.get('[id="closeSmallModal-ok"]').click();

  cy.on('window:alert 2', (str) => {
    expect(str).to.equal(`Book added to your collection.`)
  });
});