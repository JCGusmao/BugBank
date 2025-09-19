import user from "../../fixtures/user.json"

describe('Validação tela Home', () => {
    it('Elementos da tela home', () => {
        cy.home()

        cy.registerSucessfull(
            user.validUsers.email,
            user.validUsers.name,
            user.validUsers.password,
            true
        )

        cy.login(
            user.validUsers.email,
            user.validUsers.password
        )

        cy.validElementsHome()

    })

    it('Navegação dos botões da tela home', () => {
        cy.home()

        cy.registerSucessfull(
            user.validUsers.email,
            user.validUsers.name,
            user.validUsers.password,
            true
        )

        cy.login(
            user.validUsers.email,
            user.validUsers.password
        )

        cy.validButtonsHome()
    })
})