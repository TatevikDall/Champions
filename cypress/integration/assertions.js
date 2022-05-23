it('learning assertions', function(){

    cy.visit('example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
        .should('be.enabled')

    cy.get('#query-btn').invoke('attr', 'id')
        .should('equal', 'query-btn')
    
    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')


// Explicit examples
    expect(true).to.be.true
    let name ='Armenia'
    expect('name').to.be.equal('Armenia');


// assert
assert.equal(4, 4, 'Not equal')
})