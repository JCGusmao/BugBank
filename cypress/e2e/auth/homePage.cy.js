import user from "../../fixtures/user.json"

describe('Validação tela Home', () => {

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

    it('Elementos da tela home', () => {
        cy.home()
        cy.login(
            user.ValidUserWithBalance.email,
            user.ValidUserWithBalance.password
        )
        cy.checkElementsHome()
    })

    it('Navegação dos botões da tela home', () => {
        cy.home()
        cy.login(
            user.ValidUserWithBalance.email,
            user.ValidUserWithBalance.password
        )
        cy.checkButtonsHome()
    })
})