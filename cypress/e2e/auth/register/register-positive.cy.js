import user from "../../../fixtures/user.json"

describe('Registro de usuários', () => {

    it('Registro de novo usuário com saldo', () => {
        cy.home()
        cy.registerSucessfull(user.ValidUserWithBalance.email, 
            user.ValidUserWithBalance.name, 
            user.ValidUserWithBalance.password, 
            true
        )
        cy.login(user.ValidUserWithBalance.email, user.ValidUserWithBalance.password)
        cy.contains("Saldo em conta R$ 1.000,00").should('be.visible')
    })

    it('Registro de novo usuário sem saldo', () => {
        cy.home()
        cy.registerSucessfull(user.validUserWithoutBalance.email, 
            user.validUserWithoutBalance.name, 
            user.validUserWithoutBalance.password, 
            false
        )
        cy.login(user.validUserWithoutBalance.email, user.validUserWithoutBalance.password)
        cy.contains("Saldo em conta R$ 0,00").should('be.visible')
    })
})