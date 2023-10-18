
import SRHomePage2 from "../page_object/SRHomePage2.js"

describe("Simply receip test",()=>{


    it("should be able to interact with a component",()=> {
        cy.visit("https://www.simplyrecipes.com/")
        //new SRHomePage2().getHeroCompTitle2().then(title=> cy.log(title))

        new SRHomePage2().getHeroCompTitle2().then(title=> {
            cy.wrap('').then(()=>{
                expect(title).to.be.eq('This French Cake Is So Easy My 6-Year-Old Can Make It')
            })
        })


    })
    
    //This French Cake Is So Easy My 6-Year-Old Can Make It
})