import user from "../../fixtures/user.json"
import errors from "../../fixtures/errors.json"

describe('Fluxo de autenticação', () => {

    it('Login com credenciais válidas', () => {

        cy.login(user.validUsers.email, user.validUsers.password)
        // falta a validação que o login foi realizado com sucesso.
    })

    it('Login com credenciais inválidas', () => {
        cy.login(user.invalidUsers.email, user.invalidUsers.password)
        cy.contains(errors.loginScreen.invalidLogin).should('be.visible')
        cy.get('a:contains("Fechar")').click() //Botão de fechar
    })

})

describe('Validações do campo "E-mail"', () => {

    const invalidEmails = [
        'teste.com', // falta @
        'teste@.com', // domínio inválido
        'teste@teste', // falta .com
        'teste@teste.', // falta com
        '@teste.com', // falta local-part
        'teste@@teste.com' // contém dois @
    ]

    invalidEmails.forEach((email) => {
        it(`Tentativa de login com o campo "E-mail" no formato inválido: ${email}`, () => {
            cy.login(email, user.validUsers.password)
            cy.contains(errors.loginScreen.invalidEmailFormat).should('be.visible')
        })
    })

    it('Tentativa de login com o campo "E-mail" em branco', () => {
        cy.visit('https://bugbank.netlify.app')
        cy.get('input[name="password"]').first().type(user.validUsers.password)
        cy.get('input[name="email"]').first().type(" ").clear().blur()
        cy.contains(errors.loginScreen.requiredField).should('be.visible')
    })
})

describe('Validações do campo "Senha"', () => {

    it('Tentativa de login com o campo "Senha" em branco', () => {
        cy.visit('https://bugbank.netlify.app')
        cy.get('input[name="email"]').first().type(user.validUsers.email)
        cy.get('input[name="password"]').first().type(" ").clear().blur()
        cy.contains(errors.loginScreen.requiredField).should('be.visible')
    })
})