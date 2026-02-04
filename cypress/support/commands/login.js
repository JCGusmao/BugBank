import errors from "../../fixtures/errors.json"

// Realiza login no sistema
Cypress.Commands.add('login', (email, password) => {
    cy.get('input[name="email"]').first().type(email)
    cy.get('input[name="password"]').first().type(password)
    cy.get('div button:contains("Acessar")').click()
})

Cypress.Commands.add('attemptLoginWithoutEmail', () => {
    cy.get('input[name="email"]').first().click().blur()
    cy.contains(errors.loginScreen.requiredField).should('be.visible')
    cy.get('div button:contains("Acessar")').click()
})

Cypress.Commands.add('attemptLoginWithoutPassword', () => {
    cy.get('input[name="password"]').first().click().blur()
    cy.contains(errors.loginScreen.requiredField).should('be.visible')
    cy.get('div button:contains("Acessar")').click()
})