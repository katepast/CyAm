export default class BasePage{

    clickElement(locator){
        cy.get(locator).click()
    }
    setValue(locator, value){
        cy.get(locator).type(value)
    }
}