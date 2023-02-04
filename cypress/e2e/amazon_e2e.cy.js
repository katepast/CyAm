import {mainPage} from '/cypress/support/page-objects/mainPage'
import {productDetailsPage} from '/cypress/support/page-objects/productDetailsPage'
import {signInPage} from '/cypress/support/page-objects/SignInPage'

describe("Making order under unauthorized user", () => {
    const searchedItem = 'Apple iPhone 13 (128 GB) - Blau'
    const specifiedName = searchedItem.split(" ").slice(0,3).join(" ")
    
    beforeEach(() => {
        cy.openAmazonPage();
    });
   
    it('Searching the item and adding it to the busket',function()
    { 
        mainPage.searchItem(searchedItem)
        cy.url().should('contain', 'iPhone')
        mainPage.checkFreeDeliveryChb()
        mainPage.isFreeDeliveryChbChecked()
        mainPage.selectSearchItemInResults(searchedItem)
        productDetailsPage.isSeacrhedItemInTitle(specifiedName)
        productDetailsPage.addItemToBusket()

        productDetailsPage.verifyPresenceExtraProtectionModal()
        productDetailsPage.checkExtraProtectionsOneByOne()
        productDetailsPage.clickAddProtectionBtn()
        productDetailsPage.clickProceedToCheckput()
        cy.url().should('contain', '/signin')
        signInPage.isContinueBtnVisible()
        signInPage.checkErrorAfterContinueBtn()
        
    })
    it.only('Opening Career and Software Dev list list page and verifying status code eq 200', function(){
        cy.intercept("GET", 'https://www.amazon.jobs/*').as('careersList')
        cy.intercept("GET", "https://www.amazon.jobs/en/search.json?radius=**=software-development&").as('softwareDevList')
        
        mainPage.clickCareers()
        mainPage.clickSoftwareDevJobs()
        
        cy.wait('@careersList').then(res=>{
            expect(res.response.statusCode).to.equal(200)
  
        })

        cy.wait('@softwareDevList').then(res2=>{
            expect(res2.response.statusCode).to.equal(200)
            expect(res2.response.body.jobs[0].job_category).to.equal("Software Development")
        })

    });

})
