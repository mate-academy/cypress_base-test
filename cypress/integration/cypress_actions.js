

it ('login and chose the book"', () => {
  cy.visit('https://demoqa.com/login')
  cy.get('[placeholder="UserName"]').type('test_test')
  cy.get('[placeholder="Password"]').type('Qw!11111')
  cy.get('[id="login"]').click()
  cy.get('[id="userName-value"]').contains('test_test').should('exist')
  cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').click()

  cy.get('[placeholder="Type to search"]').type('Speaking JavaScript{enter}')
  cy.get('[id="see-book-Speaking JavaScript"]').click()
  cy.get('.text-right > #addNewRecordButton').click()

  cy.on('window:alert 1', (str) => {
    expect(str).to.equal(`Book added to your collection.`)
  })
  cy.get(':nth-child(6) > .element-list > .menu-list > #item-0').click()  
  cy.get('[href="/profile"]').click()  
  cy.get('[id="see-book-Speaking JavaScript"]').contains('Speaking JavaScript').should('exist')
  cy.get('#delete-record-undefined > svg > path').click()
  cy.get('[id="closeSmallModal-ok"]').click()

  cy.on('window:alert 2', (str) => {
    expect(str).to.equal(`Book deleted.`)
})
  
})
