Cypress.Commands.add('checkExtrato', () => {
    cy.get('#btn-EXTRATO').click()
    cy.url().should('include', 'https://bugbank.netlify.app/bank-statement')

    cy.contains("Saldo disponível").should("be.visible")
    cy.contains("Abertura de conta").should("be.visible")

    cy.get('#btnBack').click() //Volta para a tela inicial
    cy.url().should('include', 'https://bugbank.netlify.app/home')

    cy.get('#btn-EXTRATO').click() // volta até a tela de extrato para validar o botão Sair
    cy.get('.home__ContainerLink-sc-1auj767-2').click() //Botão SAIR superior direito
    cy.url().should('include', 'https://bugbank.netlify.app')
    cy.log("Tela de extrato validada!")
})