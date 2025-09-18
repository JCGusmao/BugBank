


Cypress.Commands.add('registerSucessfull', (email, name, password, balance) => {
    cy.visit('https://bugbank.netlify.app')

    cy.get('div button:contains("Registrar")').click()

    cy.get('a#btnBackButton:contains("Voltar ao login")')
    cy.get('[name="email"][type="email"]').last().type(email, {force: true})
    cy.get('input[name="name"]').type(name, {force: true})
    cy.get('input[name="password"]').last().type(password, {force: true})
    cy.get('input[name="passwordConfirmation"]').type(password, {force: true})

    if (balance) {
        cy.get("#toggleAddBalance").click({force: true})  //botão que cria conta com saldo
    }

    cy.get('button:contains("Cadastrar")').click({force: true})
    cy.contains("foi criada com sucesso").should("be.visible")
    cy.contains("Fechar").click({force: true})
})



Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://bugbank.netlify.app')

    cy.get('input[name="email"]').first().type(email)
    cy.get('input[name="password"]').first().type(password)
    cy.get('div button:contains("Acessar")').click()
})

