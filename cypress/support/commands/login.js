// Realiza login no sistema
Cypress.Commands.add('login', (email, password) => {

    cy.get('input[name="email"]').first().type(email)
    cy.get('input[name="password"]').first().type(password)
    cy.get('div button:contains("Acessar")').click()
})