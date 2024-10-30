
context('Validate Sidebar', () => {
  beforeEach(() => {
    cy.registerAccount().then((userData) => {
      cy.firstLogin(userData.userName, userData.password);
      cy.addBankAccount();
      cy.get('[data-test="sidenav"]').should('be.visible');
    });
  });
  it('Validate My Account Link/Page', () => {
    cy.get('[data-test="sidenav-user-settings"]').should('be.visible').click();
  });
  it('Validate Bank Accounts Link/Page', () => {
    cy.get('[data-test="sidenav-bankaccounts"]').should('be.visible').click();
  });
  it('Validate Notifications Link/Page', () => {
    cy.get('[data-test="sidenav-notifications"]').should('be.visible').click();
  });
  it('Validate Logout Link', () => {
    cy.get('[data-test="sidenav-signout"]').should('be.visible').click();
  });
})
