Cypress.Commands.add('login', (username = 'Rolling', password ='Angie1973!') => {
    cy.visit('/login');
    cy.get('#userName').type(username);
    cy.get('#password').type(password + '{enter}');
    cy.contains('#userName-value', username).should('exist');
});