// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add("login", (email = 'pashko', password = '!12345Qwerty') => { 
    cy.request({
        method: 'POST',
        url: 'https://demoqa.com/Account/v1/Login',
        body:{
            userName: "pashko",
            password: "!12345Qwerty"
        }   
    }).then((resp) => {
        cy.setCookie('token', resp.body.token)
        cy.setCookie('userID', resp.body.userId)
        cy.setCookie('userName', resp.body.username)
        cy.setCookie('expires', resp.body.expires)
    });
    
    // cy.visit('https://demoqa.com/login');
    //    cy.get('[placeholder="UserName"]').type(email);
    //    cy.get('[placeholder="Password"]').type(password);
    //    cy.get('#login').click();
    //    cy.wait(1000);
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
