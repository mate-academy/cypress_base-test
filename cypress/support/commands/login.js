/*Cypress.Commands.add('login', (username = 'Rolling', password ='Angie1973!') => {
    cy.visit('/login');
    cy.get('#userName').type(username);
    cy.get('#password').type(password + '{enter}');
    cy.contains('#userName-value', username).should('exist');
});*/

Cypress.Commands.add('login', (username = 'Rolling', password ='Angie1973!') => {
    cy.request({
        method: 'POST',
        url: "https://demoqa.com/Account/v1/Login",
        body: {
            "userName": username,
            "password": password
        }
    }).then((response) => {
        cy.setCookie("token", response.body.token);
        cy.setCookie("userID", response.body.userId);
        cy.setCookie("expires", response.body.expires);
        cy.setCookie("userName", response.body.username);
    });
});
