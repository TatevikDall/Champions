/// <reference types = "cypress"/>

describe(
    'page display on medium size screen',
    {
      viewportHeight: 720,
      viewportWidth: 1440,
    },
    () => {

    it('google test', function(){
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Armenia{enter}')
    cy.get('[href="https://en.wikipedia.org/wiki/Armenia"] > .TbwUpd > .iUh30').click()
    // cy.contains('Armenian Highlands').click()


    })


    it.only('test login', function(){
    
    const urlRedirects = [];
    
    
    cy.visit('https://wwechampions.com')
    cy.get('.right-sidebar-layout__header > :nth-child(1) > :nth-child(1)').click()
    cy.get('.scopely-login').click()
    cy.get('#input28').type('tat.dallakyan+1@gmail.com')
    cy.get('#input36').type('Test1234567')
    cy.contains('Sign in').click()
    
    cy.on('url:changed', (url) => {
      urlRedirects.push('https://wwechampions.com')
    })
    
    cy.wait(10000)
    cy.get('.account-profile__account-settings__button > svg').click()
    cy.get('[data-id="account_settings_Change Avatar"]')
        .should('contain', 'Change Avatar')
        .click()
    cy.get('.avatar-select-close')
        .should('be.visible') 
        .click() 
    cy.get('.account-profile__account-settings__button > svg')
        .click()
    cy.get('[data-id="account_settings_Logout"]').click()
    cy.get('.right-sidebar-layout__header > :nth-child(1) > :nth-child(1)').should('have.text', 'Login')

  


    })
})