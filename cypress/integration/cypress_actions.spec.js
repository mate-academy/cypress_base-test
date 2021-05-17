describe('User must be able', () => {

    const book = {
        name: 'Speaking JavaScript',
    };

    beforeEach('login', () => {
        cy.visit('https://demoqa.com/login');
        cy.get('#userName').type('tnboiko');
        cy.get('#password').type('12345Qwert!');
        
        cy.get('#login').click();
    })

    it('to login with existing creds', () => {
        cy.url().should('contain', 'https://demoqa.com/profile');
        cy.get('#userName-value').contains('tnboiko').should('exist');
    });

    it('to add and delete a book from his collection', () => {
        cy.wait(1000);
        
        cy.contains('#item-2', 'Book Store').click();
        cy.get('#searchBox').type(book.name + '{enter}');
        cy.contains('.rt-tbody', book.name).should('exist');
        cy.get('.rt-tbody').contains(book.name).click();
        cy.contains('.text-right', 'Add To Your Collection').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Book added to your collection.')
           });           

        cy.contains('#item-3', 'Profile').click();
        cy.url().should('contain', 'https://demoqa.com/profile');
        cy.contains('.rt-tbody', book.name).should('exist');

        cy.get('#delete-record-undefined').click();
        cy.get('.modal-content').should('contain', 'Do you want to delete this book?');
        cy.get('#closeSmallModal-ok').click();
        
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Book deleted.')
           });
});
