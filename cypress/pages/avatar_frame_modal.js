export class AvatarFrameModal {
    closeAvatarFrameModal(){
        cy.get('.avatar-select-close')
        .click() 
    }
}