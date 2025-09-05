import user from "../../fixtures/user.json"


describe('Validação do sistema de Login ', () => {
    it('Login com credenciais válidas', () => {

        cy.login(user.validUsers.email, user.validUsers.password)
    })

    it('Login com credenciais inválidas', () => {
        cy.login(user.invalidUsers.email, user.invalidUsers.password)
        cy.contains('Usuário ou senha inválido. Tente novamente ou verifique suas informações!').should('be.visible')
        cy.get('a:contains("Fechar")').click() //Botão de fechar
    });
})