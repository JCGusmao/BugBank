// Acessa o sistema e valida se está na página de login
Cypress.Commands.add('home', () => {
    cy.visit('https://bugbank.netlify.app')
    cy.contains("E-mail").should("be.visible")
    cy.contains("Senha").should("be.visible")
    cy.get('input[name="email"]')
    cy.get('input[name="password"]')
    cy.get('div button:contains("Acessar")')
})

Cypress.Commands.add('checkButtonsHome', () => {
    cy.get('#btn-TRANSFERÊNCIA').click()
    cy.url().should('include', 'https://bugbank.netlify.app/transfer')
    cy.log("Botão de TRANSFERÊNCIA Validado!")

    cy.get('#btnBack').click()

    cy.get('#btn-PAGAMENTOS').click()
    cy.get('.styles__ContainerInformations-sc-8zteav-3') //Verifica se abre o container
    cy.contains("Funcionalidade em desenvolvimento").should("be.visible")
    cy.get('#btnCloseModal').click()
    cy.log("Botão de PAGAMENTOS Validado!")

    cy.get('#btn-EXTRATO').click()
    cy.url().should('include', 'https://bugbank.netlify.app/bank-statement')
    cy.log("Botão de EXTRATO Validado!")

    cy.get('#btnBack').click()

    cy.get('#btn-SAQUE').click()
    cy.get('.styles__ContainerInformations-sc-8zteav-3') //Verifica se abre o container
    cy.contains("Funcionalidade em desenvolvimento").should("be.visible")
    cy.get('#btnCloseModal').click()
    cy.log("Botão de SAQUE Validado!")

    cy.get('.home__ContainerLink-sc-1auj767-2').click() //Botão SAIR superior direito
    cy.url().should('include', 'https://bugbank.netlify.app')
    cy.log("Botão de SAIR Validado!")

    // Falta o click no logo BugBank
})

Cypress.Commands.add('checkElementsHome', () => {
    cy.get('.home__ContainerLink-sc-1auj767-2') // Valida se existe o botão Sair
    cy.contains("Saldo em conta R$ ").should("be.visible")
    cy.contains("bem vindo ao BugBank :)").should("be.visible")
    cy.get('#btn-TRANSFERÊNCIA')
    cy.get('#btn-PAGAMENTOS')
    cy.get('#btn-EXTRATO')
    cy.get('#btn-SAQUE')
    cy.contains("Conta digital:").should("be.visible")
    cy.contains("Obrigado por escolher o nosso banco").should("be.visible")
    // Adicionar validação do logo BugBank
    cy.log("Elementos da tela home Validados!")
})