export class SettingsMenu {

  clickSettingsMenuIcon() {
    cy.get('[data-id="account_profile_settings_show_button"]', {timeout:8000}).click()
  } 
  clickChangeAvatarOption() {
    cy.get('[data-id="account_settings_Change Avatar"]')
    .should('contain', 'Change Avatar')
    .click()

  } 
  clickLogOutOption() {
    cy.get('[data-id="account_settings_Logout"]').click()
  }

}