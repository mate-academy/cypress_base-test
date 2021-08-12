/// <reference types="cypress" />

describe('', () => {
    const user = {
        username: 'Fat_Cartman',
        password: '1qaz!QAZ'
    };
    const book = {
        title: 'Speaking JavaScript'
    }

    beforeEach(function () {
        cy.login();
    });

    it('Login check', () => {
        cy.get('#userName-value').contains('Fat_Cartman').should('exist');
    });

    it('Book add', () => {
        cy.visit("/books");
        cy.get('#searchBox').type(book.title);
        cy.contains('[href="/books?book=9781449365035"]', 'Speaking JavaScript').click();
        cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
        cy.on('window:alert_1', (str) => {
            expect(str).to.equal(`Book added to your collection.`);
        });
    });
    
    it('Delete book', () => {
        cy.visit("/profile");
        cy.get('#delete-record-undefined').click();
        cy.get('#closeSmallModal-ok').click();
        cy.on('window:alert_2', (str) => {
            expect(str).to.equal('Book deleted.');
        });
    });
});