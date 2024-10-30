/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(userName: string, password: string): Chainable<void>
    firstLogin(username: string, password: string): Chainable<void>
    addBankAccount(): Chainable<void>
    registerAccount(): Chainable<UserData>
  }
}

interface UserData {
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
}