import { faker } from '@faker-js/faker';

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

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.get('#username').should('be.visible').type(username);
  cy.get('#password').should('be.visible').type(password);
  cy.get('[data-test="signin-submit"]').should('be.visible').and('be.enabled').click();
});

Cypress.Commands.add('firstLogin', (username: string, password: string) => {
  cy.get('#username').should('be.visible').type(username);
  cy.get('#password').should('be.visible').type(password);
  cy.get('[data-test="signin-submit"]').should('be.visible').and('be.enabled').click();
  cy.get('[data-test="user-onboarding-dialog-content"]').should('be.visible');
  cy.get('[data-test="user-onboarding-next"]').should('be.visible').and('be.enabled').click();
});

Cypress.Commands.add('addBankAccount', () => {
  cy.get('#bankaccount-bankName-input').should('be.visible').type('Chase');
  cy.get('#bankaccount-routingNumber-input').should('be.visible').type("123123123");
  cy.get('#bankaccount-accountNumber-input').should('be.visible').type('123123123');
  cy.get('[data-test="bankaccount-submit"]').should('be.visible').and('be.enabled').click();
  cy.get('[data-test="user-onboarding-dialog-title"]').should('have.text', 'Finished');
  cy.get('[data-test="user-onboarding-next"]').should('be.visible').and('be.enabled').click();
});

Cypress.Commands.add('registerAccount', (): Cypress.Chainable<UserData> => {
  const userData: UserData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    userName: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
  cy.visit('/signup');
  cy.get('#firstName')
    .should('be.visible')
    .type(userData.firstName);

  cy.get('#lastName').should('be.visible').type(userData.lastName);
  cy.get('#username').should('be.visible').type(userData.userName);
  cy.get('#password').should('be.visible').type(userData.password);
  cy.get('#confirmPassword').should('be.visible').type(userData.password);
  cy.get('[data-test="signup-submit"]').should('be.visible').and('be.enabled').click();
  cy.url().should('include', '/signin');

  return cy.wrap(userData);
});