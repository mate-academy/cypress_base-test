Cypress.Commands.add("login", (username = 'Fat_Cartman', password = '1qaz!QAZ') => {
    cy.visit("/login");
    cy.get('#userName').type(username);
    cy.get('#password').type(password + '{enter}');
});