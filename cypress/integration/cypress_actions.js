/// <reference types='cypress' />


const user = {
    username: 'DavyJones',
    password: 'RGTHYJyh56@'
}

describe('Homework: Cypress Configs Basic', () => {
    beforeEach('Go to practice page and Login as your registered account', () => {
        cy.visit('https://demoqa.com/login');
        cy.get('#userName').type(user.username);
        cy.get('#password').type(user.password);
        cy.get('#login').click();
        //Check your username after login username
        cy.contains('#userName-value', user.username).should('exist');
    });

    it('Test to books list', () => {
        cy.contains('#item-2', 'Book Store').click();
        //Type into search field “Speaking JavaScript”
        cy.get('#searchBox').type('Speaking JavaScript'); 
        //Click on ‘Speaking JavaScript’ link
        cy.get('[id="see-book-Speaking JavaScript"]').click(); 
        //Click on [Add To Your Collection] button on Speaking JavaScript preview page
        cy.contains('#addNewRecordButton', 'Add To Your Collection').click();
        //Confirm popup. You can do it with cy.on()
        cy.on('windows:alert', (alert) => {
            expect(alert).to.eq('Book added to your collection.');
        })
    });


    it('Open your profile page', () => {
        cy.visit('https://demoqa.com/profile');    
         //Assert ‘Speaking JavaScript’ in your shopping list
        cy.get('[id="see-book-Speaking JavaScript"]').should('exist'); 
        //Delete Speaking JavaScript book from your list
        cy.get('#delete-record-undefined').click();
        cy.get('#closeSmallModal-ok').click(); 
    })
});

