Cypress.Commands.add('checkPagamentos', () => {
    cy.get('#btn-PAGAMENTOS')
    cy.get('.styles__ContainerInformations-sc-8zteav-3')
    cy.get('#btnCloseModal').click()
    cy.url().should('include', 'https://bugbank.netlify.app/home')
})