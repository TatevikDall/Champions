export class RightMenu {
    checkMainLogInButton(){
        cy.get('.right-sidebar-layout__header > :nth-child(1) > :nth-child(1)')
        .should('have.text', 'Login')
    }
   
}