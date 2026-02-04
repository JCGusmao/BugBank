import user from "../../../fixtures/user.json"
import errors from "../../../fixtures/errors.json"

describe('Fluxo de autenticação', () => {

    it('Login com credenciais válidas', () => {
        cy.home()
        cy.login(user.ValidUserWithBalance.email, user.ValidUserWithBalance.password)
        // falta a validação que o login foi realizado com sucesso.
    })

    it('Login com credenciais válidas em conta com saldo', () => {
        cy.home()
        cy.login(user.ValidUserWithBalance.email, user.ValidUserWithBalance.password)
        cy.contains("Saldo em conta R$ 1.000,00").should("be.visible")
    })

    it('Login com credenciais válidas em conta sem saldo', () => {
        cy.home()
        cy.login(user.validUserWithoutBalance.email, user.validUserWithoutBalance.password)
        cy.contains("Saldo em conta R$ 0,00").should("be.visible")
    })
})
