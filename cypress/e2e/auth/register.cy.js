import user from "../../fixtures/user.json"
import errors from "../../fixtures/errors.json"

describe('Registro de usuários', () => {

    it('Registro de novo usuário com saldo', () => {
        cy.registerSucessfull(user.validUsers.email, user.validUsers.name, user.validUsers.password, true)
    })

    it('Registro de novo usuário sem saldo', () => {
        cy.registerSucessfull(user.validUser2.email, user.validUser2.name, user.validUser2.password, false)
    })
})

