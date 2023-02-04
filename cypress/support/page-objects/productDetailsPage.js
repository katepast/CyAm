import BasePage from "./basePage";

export class ProductDetailsPage extends BasePage{
    constructor() {
        super();
        this.productTitle = '#productTitle';
        this.addTobusket = '#add-to-cart-button'
        this.addProtectionBtn = 'input[aria-labelledby="attachSiAddCoverage-announce"]'
        this.proceedToCheckout = '#attach-accessory-proceed-to-checkout-text'

    }
    isSeacrhedItemInTitle(item_name){
        return cy.get(this.productTitle).contains(item_name)
    }

    addItemToBusket(){
        this.clickElement(this.addTobusket)
    }
    
    verifyPresenceExtraProtectionModal(){
        return cy.contains('h3', 'Add Extra Protection?').should('be.visible')
    }

    checkExtraProtectionsOneByOne(){
        cy.get('[class="a-checkbox a-checkbox-fancy"]').find('input[type="checkbox"]').then(cheboxes => {
        // Check first checkbox is unchecked by default and verify that it is checked after checking
        cy.wrap(cheboxes)
            .eq(0)
            .should("be.not.checked")
            .check({force: true})
            .should("be.checked")

        // Check second checkbox is unchecked by default and verify that it is checked after checking
        cy.wrap(cheboxes)
            .eq(1)
            .should("be.not.checked")
            .check({force: true})
            .should("be.checked")
       
        })
    }
    clickAddProtectionBtn(){
        this.clickElement(this.addProtectionBtn)
    }

    clickProceedToCheckput(){
        cy.contains('span', 'Proceed to checkout').click({force: true})
    }

}

    export const productDetailsPage = new ProductDetailsPage()