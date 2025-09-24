Cypress.Commands.add('checkSaque', () => {
    cy.get('#btn-SAQUE')
    cy.get('.styles__ContainerInformations-sc-8zteav-3')
    cy.get('#btnCloseModal').click()  //Volta para a tela inicial
    cy.url().should('include', 'https://bugbank.netlify.app/home')
})