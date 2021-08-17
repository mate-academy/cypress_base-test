
// Cypress.Commands.add('login', (username = 'test', password = 'Qwerty123!') => {
//     cy.visit('https://demoqa.com/login');
//     cy.get('#userName').type(username);
//     cy.get('#password').type(password + '{enter}');
//     cy.url().should('include', '/profile');
// });


Cypress.Commands.add('login', (username = 'test', password = 'Qwerty123!') => {
    cy.request({
        method: 'POST',
        url: 'https://demoqa.com/Account/v1/login',
        body: {
            'userName': username,
            'password': password
        }
    }).then((resp) => {
            cy.setCookie('token', resp.body.token);
            cy.setCookie('userID', resp.body.userId);
            cy.setCookie('expires', resp.body.expires);
            cy.setCookie('userName', resp.body.username);
    });
});
