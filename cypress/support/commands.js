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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click();
    if (email){
        cy.get('#mail').type(email);
    }
    if (password){
        cy.get('#pass').type(password); 
    }
    cy.contains('Submit').click();
})

Cypress.Commands.add('addBook', (title, description, author) => {
    if (title){
        cy.get('#title').type(title);
    }
    if (description){
        cy.get('#description').type(description); 
    }
    if (author){
        cy.get('#authors').type(author); 
    }

    cy.get('#favorite').check();
    cy.contains('Submit').click();
});

Cypress.Commands.add('addBook', (title, description, author, fixturePathJpg, fixturePathBook) => {
    
    if (title){
        cy.get('#title').type(title);
    }
    if (description){
        cy.get('#description').type(description); 
    }
    if (author){
        cy.get('#authors').type(author); 
    }
    if (fixturePathJpg){
        cy.get('#fileCover').selectFile('cypress/fixtures/skazka_o_rybake_i_rybke.jpg')
        
    }
    if (fixturePathBook){
        cy.get('#fileBook').selectFile('cypress/fixtures/skazka_o_rybake_i_rybke.zip')
       
    }

    cy.get('#favorite').check();
    cy.contains('Submit').click();
});

Cypress.Commands.add('addToFavorites', () => {
    if(!cy.contains('Add to favorite')){
        
    }else{
        cy.contains('Add to favorite').click();
    }
});
