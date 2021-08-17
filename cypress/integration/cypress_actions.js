const user = {
    username: 'DramaQueen',
    password: 'Drama666!'
}

describe('User log in', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/login');
        cy.get('#userName').type(user.username);
        cy.get('#password').type(user.password);
        cy.get('#login').click();
    });

it('User add book to colection', () =>{
    cy.url().should('include', '/profile');
    cy.get('#userName-value').should('contain', 'DramaQueen');
    cy.contains('#item-2', 'Book Store').click();
    cy.get('#searchBox').type('Speaking JavaScript');
    cy.get('[id="see-book-Speaking JavaScript"]').click();
    cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Book added to your collection.`)
       });
});
it('Delete book from colection', () =>{
    cy.visit('https://demoqa.com/login/profile');
    cy.contains('.rt-tr-group', 'Speaking JavaScript')
        .find('#delete-record-undefined').click();
    cy.get('#closeSmallModal-ok').click();
    cy.on('window:alert 2', (str) => {
        expect(str).to.equal('Book deleted.');
        });
    });
}); 