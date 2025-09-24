Cypress.Commands.add('checkTransferencia', () => {

    // Necessário realizar login novamente
    cy.get('#btn-TRANSFERÊNCIA').click()
    cy.contains("Realize transferência de valores entre contas BugBank com taxa 0 e em poucos segundos.").should("be.visible")

    cy.contains("Número da conta").should("be.visible")
    cy.get('[name="accountNumber"]')

    cy.contains("Dígito").should("be.visible")
    cy.get('[name="digit"]')

    cy.contains("Valor da transferência").should("be.visible")
    cy.get('[name="transferValue"]')

    cy.contains("Descrição").should("be.visible")
    cy.get('[name="description"]')

    cy.get('.button:contains("Transferir agora")')

    cy.get('#btnBack').click() //Volta para a tela inicial
    cy.url().should('include', 'https://bugbank.netlify.app/home')

    cy.get('#btn-TRANSFERÊNCIA').click() // volta até a tela de transferencia para validar o botão Sair
    cy.get('.home__ContainerLink-sc-1auj767-2').click() //Botão SAIR superior direito
    cy.url().should('include', 'https://bugbank.netlify.app')
    cy.log("Botão de SAIR Validado!")
    cy.log("Tela de transferência validada!")
})