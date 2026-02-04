import user from "../../../fixtures/user.json"
import errors from "../../../fixtures/errors.json"

describe('Fluxo de autenticação', () => {

    it('Login com credenciais inválidas', () => {
        cy.home()
        cy.login(user.invalidUsers.email, user.invalidUsers.password)
        cy.contains(errors.loginScreen.invalidLogin).should('be.visible')
        cy.get('a:contains("Fechar")').click() //Botão de fechar
    })

    it('Tentativa de login com os campos "E-mail" e "Senha" em branco', () => {
        cy.home()
        cy.attemptLoginWithoutEmail()
        cy.attemptLoginWithoutPassword()
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
            cy.home()
            cy.login(email, user.ValidUserWithBalance.password)
            cy.contains(errors.loginScreen.invalidEmailFormat).should('be.visible')
        })
    })

    it('Tentativa de login com o campo "E-mail" em branco', () => {
        cy.home()
        cy.get('input[name="password"]').first().type(user.ValidUserWithBalance.password)
        cy.attemptLoginWithoutEmail()
    })
})

describe('Validações do campo "Senha"', () => {

    it('Tentativa de login com o campo "Senha" no formato inválido: ', () => {
        
    })

    it('Tentativa de login com o campo "Senha" em branco', () => {
        cy.home()
        cy.get('input[name="email"]').first().type(user.ValidUserWithBalance.email)
        cy.attemptLoginWithoutPassword()
    })
})