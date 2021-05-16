/* 
1. Login as your registered account
2. Check your username after login username
3. Navigate to books list
4. ype into search field “Speaking JavaScript”
5. Click on ‘Speaking JavaScript’ link
6. Click on [Add To Your Collection] button on Speaking JavaScript preview page
7. Confirm popup. You can do it with cy.on()
cy.on('window:alert', (str) => {
 expect(str).to.equal(`Book added to your collection.`)
})
8. Open your profile page
9. Assert ‘Speaking JavaScript’ in your shopping list
10. Delete Speaking JavaScript book from your list */

describe('Homework_4', () => {
    beforeEach('', () => {
      cy.visit('/login');

      // Login as your registered account
      cy.get('#userName').type('john.smith').should('have.value', 'john.smith');
      cy.get('#password').type('passwordA1#').should('have.value', 'passwordA1#');
      cy.contains('.btn.btn-primary', 'Login').click();
    });
  
    // Check your username after login username
    it('Check your username after login', () => {

        cy.contains('#userName-value', 'john.smith').should('exist');

    });


    it('Add to Collection', () => {
        cy.wait(1000);

        // Navigate to books list
        cy.contains('#item-2', 'Book Store').click();

        // Type into search field “Speaking JavaScript”
        cy.get('#searchBox').type('Speaking JavaScript');

        // Click on ‘Speaking JavaScript’ link
        cy.get('.mr-2').click();

        // Click on [Add To Your Collection] button on Speaking JavaScript preview page
        cy.contains('#addNewRecordButton', 'Add To Your Collection').click();

        // Confirm popup. You can do it with cy.on()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Book added to your collection.`)
           });

        // Open your profile page
        cy.contains('#item-3', 'Profile').click();

        // Assert ‘Speaking JavaScript’ in your shopping list
        cy.contains('.profile-wrapper', 'Speaking JavaScript').should('exist');

    });

    

    // 10. Delete Speaking JavaScript book from your list
    it('Delete book', () => {
        cy.wait(1000);  

     // Open your profile page
        cy.contains('#item-3', 'Profile').click();

     // Assert ‘Speaking JavaScript’ in your shopping list
        cy.contains('.profile-wrapper', 'Speaking JavaScript').should('exist');
        cy.get('#delete-record-undefined').click();
        cy.get('#closeSmallModal-ok').click();

    // Confirm popup. You can do it with cy.on()

        cy.on('window:alert', (str) => {
        expect(str).to.equal(`Book deleted.`)
         });
        });
  
});

