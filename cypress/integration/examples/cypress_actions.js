/// <reference types="cypress" />

describe('', () => {
    const user = {
        username: 'test',
        password: 'Qwerty123!'
    };

    const book = {
        name: 'Speaking JavaScript',
        author: 'Axel Rauschmayer',
        publisher: 'O\'Reilly Media'
     };


it('successsfully login', () => {
    cy.visit('/profile');
    cy.url().should('include', '/profile');
    cy.get('#userName-value').should('contain', user.username);
});

it('add book to profile', () =>{
    cy.contains('#item-2', 'Book Store').click();
    cy.get('#searchBox').type(book.name);
    cy.contains('.rt-tr.-odd', book.name)
    .should('contain', book.author).and('contain', book.publisher);
    cy.get('.action-buttons').click();
    cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Book added to your collection.`)
       });
    });

it('delete book from profile', () =>{
    cy.contains('#item-3', 'Profile').click();
    cy.contains('.rt-tr-group', 'Speaking JavaScript')
        .find('#delete-record-undefined').click();
    cy.get('#closeSmallModal-ok').click();
    cy.on('window:alert 2', (str) => {
        expect(str).to.equal('Book deleted.');
        });
    });
});
