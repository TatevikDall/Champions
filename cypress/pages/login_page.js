export class LoginPage {

    navigate() {
        cy.visit('https://wwechampions.com')

    }
    clickMainLogInButton() {
        cy.get('.right-sidebar-layout__header > :nth-child(1) > :nth-child(1)')
        .click()
    }
    clickScopelyIdButton() {
        cy.get('.scopely-login')
        .click()
    }
    enterUserName() {
        cy.get('#input28')
        .type('tat.dallakyan+1@gmail.com')

    }
    enterPassword() {
        cy.get('#input36')
        .type('Test1234567')

    }
    clickSignIn() {
        cy.contains('Sign in')
        .click()
    }
    
}