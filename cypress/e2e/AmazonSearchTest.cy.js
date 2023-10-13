import AmazonHomePage from '../page_object/AmazonHomePage.js'
import AmazonSearchResults from '../page_object/AmazonSearchResults.js'
describe("amazon search test",()=>{
it("should be able to search dining table",()=>{ 
    const SEARCH_TEXT="dining table"

    cy.visit("https://www.amazon.com/")
    
    let amzHomePage=new AmazonHomePage()
    amzHomePage.SearchTxtBxElem.type(SEARCH_TEXT)
    amzHomePage.SearchBtnElem.click()

    let amzSearchResults =new AmazonSearchResults()
    amzSearchResults.SearchResultsItem.should("not.have.length",0)

})

})