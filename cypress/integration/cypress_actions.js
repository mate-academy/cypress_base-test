/// <reference types='cypress' />

describe('Adding and removing of the book in a collection by registered user', () => {
    const book = {
      title: 'Speaking JavaScript',
      publisher: `O'Reilly Media`,
      author: 'Axel Rauschmayer',
      description: 'Like it or not, JavaScript'
    };

    it('Adding book to a collection', () => {
      cy.contains('#item-2', 'Book Store').click();
      cy.get('#searchBox').type(book.title);

      cy.contains('.rt-tr.-odd', book.title)
        .should('contain', book.author)
        .and('contain', book.publisher);
      cy.get('[id="see-book-Speaking JavaScript"]').click();

      cy.get('#description-wrapper').should('contain', book.description);
      cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
      cy.on('window:alert', (alert) => {
        expect(alert).to.equal(`Book added to your collection.`)
       });
    });

    it('Removing book from a collection', () => {
      cy.visit('/profile');

      cy.get('#delete-record-undefined').click();
      cy.get('#closeSmallModal-ok').click();
      cy.get('window:alert', (alert) => {
        expect(alert).to.equal(`Book deleted.`)
       });
    });
});
