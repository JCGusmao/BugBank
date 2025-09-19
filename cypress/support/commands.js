// Acessa o sistema e valida se está na página de login
Cypress.Commands.add('home', () => {
    cy.visit('https://bugbank.netlify.app')
    cy.contains("E-mail").should("be.visible")
    cy.contains("Senha").should("be.visible")
    cy.get('input[name="email"]')
    cy.get('input[name="password"]')
    cy.get('div button:contains("Acessar")')
})

// Cria um novo usuário com e sem saldo 
Cypress.Commands.add('registerSucessfull', (email, name, password, balance) => {

    cy.get('div button:contains("Registrar")').click()

    cy.get('a#btnBackButton:contains("Voltar ao login")')
    cy.get('[name="email"][type="email"]').last().type(email, { force: true })
    cy.get('input[name="name"]').type(name, { force: true })
    cy.get('input[name="password"]').last().type(password, { force: true })
    cy.get('input[name="passwordConfirmation"]').type(password, { force: true })

    if (balance) {
        cy.get("#toggleAddBalance").click({ force: true })  //botão que cria conta com saldo
    }

    cy.get('button:contains("Cadastrar")').click({ force: true })
    cy.contains("foi criada com sucesso").should("be.visible")
    cy.contains("Fechar").click({ force: true })
})

// Realiza login no sistema
Cypress.Commands.add('login', (email, password) => {

    cy.get('input[name="email"]').first().type(email)
    cy.get('input[name="password"]').first().type(password)
    cy.get('div button:contains("Acessar")').click()
})

Cypress.Commands.add('validElementsHome', () => {
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

Cypress.Commands.add('validButtonsHome', () => {
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

Cypress.Commands.add('validTransferencia', () => {

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

Cypress.Commands.add('validPagamentos', () => {
    cy.get('#btn-PAGAMENTOS')
    cy.get('.styles__ContainerInformations-sc-8zteav-3')
    cy.get('#btnCloseModal').click()
    cy.url().should('include', 'https://bugbank.netlify.app/home')
})

Cypress.Commands.add('validExtrato', () => {
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

Cypress.Commands.add('validSaque', () => {
    cy.get('#btn-SAQUE')
    cy.get('.styles__ContainerInformations-sc-8zteav-3')
    cy.get('#btnCloseModal').click()  //Volta para a tela inicial
    cy.url().should('include', 'https://bugbank.netlify.app/home')
})