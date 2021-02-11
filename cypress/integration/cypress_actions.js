// https://demoqa.com/login
// Create cypress test for test site

// Create your account before tests register page. Note: that action you should perform only once. Do not automate it!

// Write your automation test:

// Login as your registered account
// Check your username after login username
// Navigate to books list
// Type into search field “Speaking JavaScript”
// Click on ‘Speaking JavaScript’ link
// Click on [Add To Your Collection] button on Speaking JavaScript preview page
// Confirm popup. You can do it with cy.on()
// cy.on('window:alert', (str) => {
//  expect(str).to.equal(`Book added to your collection.`)
// })
// Open your profile page
// Assert ‘Speaking JavaScript’ in your shopping list
// Delete Speaking JavaScript book from your list

/// <reference types='cypress' />

describe('Papilota Dmytro Homework 11-02', () => {

    const user = {
        firstName: 'Hari',
        lastName: 'Mcdowell',
        userName: 'tozalo',
        password: '12345Aa!',
    }

    const book = {
        name: 'Speaking JavaScript',
        author: 'Axel Rauschmayer',
        publisher: 'O\'Reilly Media',
        description: 'Like it or not, JavaScript is everywhere',
    }

    beforeEach(function () {
        cy.visit('https://demoqa.com/login');
        cy.get('#userName').type(user.userName);
        cy.get('#password').type(user.password);
        cy.get('#login').click();
    });

    it ('logInOk', () => {
        cy.get('#userName-value').should('contain', user.userName);     
    })

    it ('addBook', () => {
        cy.get('#gotoStore').click();
        cy.get('#searchBox').type(book.name);
        cy.contains('.rt-tr-group', book.name);
        cy.contains('.action-buttons', book.name).click();
        cy.get('.books-wrapper').should('contain', book.name, book.author, book.publisher,book.description);
        cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
        cy.contains('#addNewRecordButton', 'Back To Book Store').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
           });
    })

    it ('delBook', () => {
        cy.contains('.rt-tr-group', book.name).find('#delete-record-undefined').click();
        cy.get('#closeSmallModal-ok').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book deleted.`)
           });

    })
})