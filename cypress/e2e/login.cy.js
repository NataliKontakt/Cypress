describe('successfully logins with the valid credentials', () => {
  it('main page opened', () => {
    cy.visit('/');
    cy.contains('Books list').should('be.visible');
  });
  

  it('passes', () => {
    cy.visit('/');
    cy.login('test@test.com','test');
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
  });

  it('show error message on empty login', () => {
    cy.visit('/');
    cy.login(null,'test');
    cy.get('#mail')
    .then((element) => element[0].checkValidity())
    .should('be.false');
    cy.get('#mail')
    .then((element) => element[0].validationMessage)
    .should('contain', 'Заполните это поле');
  });

  it('show error message on empty passvord', () => {
    cy.visit('/');
    cy.login('test@test.com',null);
    cy.get('#pass')
    .then((element) => element[0].checkValidity())
    .should('be.false');
    cy.get('#pass')
    .then((element) => element[0].validationMessage)
    .should('contain', 'Заполните это поле');
  });

  it('Book description page opened', () => {
    cy.visit('/');
    cy.login('test@test.com','test');
    cy.contains('Add new').click();
    cy.contains('Book description').should('be.visible');

  });

  it('Add book', () => {
    cy.visit('/');
    cy.login('test@test.com','test');
    cy.contains('Add new').click();
    cy.contains('Book description').should('be.visible');
    cy.addBook('Сказка о рыбаке и рыбке', 'Сказка', 'Пушкин А.С.', 'skazka_o_rybake_i_rybke.jpg', 'skazka_o_rybake_i_rybke.zip');
    cy.contains('Сказка о рыбаке и рыбке').should('be.visible');
  });

  it('Delete from favorite', () => {
    cy.visit('/');
    cy.login('test@test.com','test');
    if (!cy.contains('Сказка о рыбаке и рыбке')){
      cy.addBook('Сказка о рыбаке и рыбке', 'Сказка', 'Пушкин А.С.', 'skazka_o_rybake_i_rybke.jpg', 'skazka_o_rybake_i_rybke.zip');
    };
    cy.contains('Favorites').click();
    cy.contains('Delete from favorite').click();
    cy.contains('Please add some book to favorit on home page!').should('be.visible');
    cy.contains('Books list').click();
    cy.contains('Add to favorite').click();
  });

  it('Add in favorite', () => {
    cy.visit('/');
    cy.login('test@test.com','test');
    if (!cy.contains('Сказка о рыбаке и рыбке')){
      cy.addBook('Сказка о рыбаке и рыбке', 'Сказка', 'Пушкин А.С.', 'skazka_o_rybake_i_rybke.jpg', 'skazka_o_rybake_i_rybke.zip');
    };
    cy.contains('Delete from favorite').click();
    cy.contains('Add to favorite').click();
    cy.contains('Favorites').click();
    cy.contains('Сказка о рыбаке и рыбке').should('be.visible');
  });
 
  it('View book in favorites', () => {
    cy.visit('/');
    cy.login('test@test.com','test');
    if (!cy.contains('Сказка о рыбаке и рыбке')){
      cy.addBook('Сказка о рыбаке и рыбке', 'Сказка', 'Пушкин А.С.', 'skazka_o_rybake_i_rybke.jpg', 'skazka_o_rybake_i_rybke.zip');
    };
    cy.contains('Favorites').click();
    cy.contains('Сказка о рыбаке и рыбке').click();
    cy.contains('Dowload book').should('be.visible');
  });
})