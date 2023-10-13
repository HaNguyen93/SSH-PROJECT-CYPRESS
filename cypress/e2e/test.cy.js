
describe("amazon search test",()=>{
it("should be able to search dining table",()=>{ 
    const SEARCH_TEXT="dining table"

    cy.visit("https://www.amazon.com/")
    cy.get("#twotabsearchtextbox",{timeout:10000}).type(SEARCH_TEXT)
    cy.get("#nav-search-submit-button").click()



})

})