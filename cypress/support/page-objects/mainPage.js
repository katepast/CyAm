import BasePage from "./basePage";

export class MainPage extends BasePage{
    constructor() {
        super();  
        this.searchField = 'input[placeholder="Search Amazon.de"]';
        this.searchBtn = 'input[value="Go"]'
        this.freeDeliveryChb = 'li[aria-label="Free Delivery by Amazon"] input[type="checkbox"]'
        this.searchResultItem = 'div[cel_widget_id="MAIN-SEARCH_RESULTS-2"]'
        

    }
    searchItem(item_name){
        this.setValue(this.searchField, item_name)
        this.clickElement(this.searchBtn)
    }

    verifyPresenceOfSearchedItem(item_name){
        return cy.contains(item_name)
    }

    checkFreeDeliveryChb(){
        cy.contains('li',"Free Delivery by Amazon")
            .find('input[type="checkbox"]')
            .check({force: true})
        
    }
    isFreeDeliveryChbChecked(){
        return cy.get(this.freeDeliveryChb)
                .should('be.checked')
    }

    selectSearchItemInResults(search_item){
        return cy.get(this.searchResultItem)
            //.contains(search_item)
            .click()
    }

    clickCareers(){
        cy.contains('.nav_a','Careers').click()
    }
    clickSoftwareDevJobs(){
        cy.origin("https://www.amazon.jobs/en/", ()=>{
            cy.get('div.software_development a').click()
            
        }) 
    }


} 

export const mainPage = new MainPage()