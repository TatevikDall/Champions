/// <reference types = "cypress"/>
import {LoginPage} from "../pages/login_page"
import {SettingsMenu} from "../pages/settings_menu"
import {AvatarFrameModal} from "../pages/avatar_frame_modal"
import {RightMenu} from "../pages/right_menu"

describe(
    'page display on medium size screen',
    {
      viewportHeight: 720,
      viewportWidth: 1440,
    },
    () => {

 
    it.only('login and logout test', function(){
    
    const loginPage = new LoginPage
    const settingsMenu = new SettingsMenu
    const avatarFrameModal = new AvatarFrameModal
    const rightMenu = new RightMenu
    const urlRedirects = [];
    
    loginPage.navigate();
    loginPage.clickMainLogInButton();
    loginPage.clickScopelyIdButton();
    loginPage.enterUserName();
    loginPage.enterPassword();
    loginPage.clickSignIn();
    
    cy.on('url:changed', (url) => {
      urlRedirects.push('https://wwechampions.com')
     })
    
    cy.wait(14000)
    settingsMenu.clickSettingsMenuIcon();
    settingsMenu.clickChangeAvatarOption();
    avatarFrameModal.closeAvatarFrameModal();
    settingsMenu.clickSettingsMenuIcon();
    settingsMenu.clickLogOutOption();
    rightMenu.checkMainLogInButton();
    

  


    })
})
