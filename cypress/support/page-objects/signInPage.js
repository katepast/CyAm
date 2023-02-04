import BasePage from "./basePage";

export class SignInPage extends BasePage{
    constructor() {
        super();
        this.continueBtn = 'input[class="a-button-input"]';
    }
    
    clickContinueBtn(){
        this.clickElement(this.continueBtn)
    }

    isContinueBtnVisible(){
        return cy.get(this.continueBtn).should("be.visible")
    }
    checkErrorAfterContinueBtn(){
        this.clickContinueBtn()
        return cy.get("#auth-email-missing-alert div.a-alert-content").should("be.visible")
        
    }
}

export const signInPage = new SignInPage()
