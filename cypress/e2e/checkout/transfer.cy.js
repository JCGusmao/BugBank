import user from "../../fixtures/user.json"

describe('Fluxo de transferencia de uma conta com saldo para outra sem saldo', () => {
    beforeEach(() => {
        cy.session([user.ValidUserWithBalance.email, user.ValidUserWithBalance.password], () => {
            cy.home()
            cy.registerSucessfull(
                user.ValidUserWithBalance.email,
                user.ValidUserWithBalance.name,
                user.ValidUserWithBalance.password,
                true
            )
        })
    })


    it('', () => {
        
    })
})
