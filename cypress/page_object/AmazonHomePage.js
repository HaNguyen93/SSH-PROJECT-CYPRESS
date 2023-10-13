const SEARCH_TXT_BX_SEL="#twotabsearchtextbox"
const SEARCH_BTN_SEL="#nav-search-submit-button"
class AmazonHomePage{
    get SearchTxtBxElem(){
        return cy.get(SEARCH_TXT_BX_SEL,{timeout:10000})
    }
    get SearchBtnElem(){
        return cy.get(SEARCH_BTN_SEL)
    }

}
module.exports=AmazonHomePage