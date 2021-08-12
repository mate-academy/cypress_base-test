const user = {
    username: 'Maksmaks1',
    password: 'Maks123!'
}
 
describe('', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/login');
        cy.get('#userName').type(user.username);
        cy.get('#password').type(user.password);
        cy.get('#login').click();
    });
 
it('', () =>{
    cy.url().should('include', '/profile');
    cy.get('#userName-value').should('contain', 'test');
    cy.contains('#item-2', 'Book Store').click();
    cy.get('#searchBox').type('Speaking JavaScript');
    cy.get('[id="see-book-Speaking JavaScript"]').click();
    cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Book added to your collection.`)
       });
});
it('', () =>{
    cy.contains('#item-3', 'Profile').click();
    cy.contains('.rt-tr-group', 'Speaking JavaScript')
        .find('#delete-record-undefined').click();
    cy.get('#closeSmallModal-ok').click();
    cy.on('window:alert 2', (str) => {
        expect(str).to.equal('Book deleted.');
        });
    });
});