import user from "../../fixtures/user.json"

describe('Validação tela Home', () => {

    beforeEach(() => {
        cy.session([user.validUsers.email, user.validUsers.password], () => {
            cy.home()
            cy.registerSucessfull(
                user.validUsers.email,
                user.validUsers.name,
                user.validUsers.password,
                true
            )
        })
    })

    it('Elementos da tela home', () => {
        cy.home()
        cy.login(
            user.validUsers.email,
            user.validUsers.password
        )
        cy.checkElementsHome()
    })

    it('Navegação dos botões da tela home', () => {
        cy.home()
        cy.login(
            user.validUsers.email,
            user.validUsers.password
        )
        cy.checkButtonsHome()
    })
})