//import Hero_Component from "../component/Hero_Component.js"
import SRHomePage from "../page_object/SRHomePage.js"

describe("Simply receip home pagetest",()=>{

    it("should be able print all the title",()=>{
        cy.visit("https://www.simplyrecipes.com/")
        cy.get(".card__title").each(($title,index)=>{
            cy.log(index)
            cy.log($title.text().trim())

        })
    })

    it.only("should be able to interact with a component",()=>{
        cy.visit("https://www.simplyrecipes.com/")

        const srhomepage =new SRHomePage()
        srhomepage.heroComponent().CardTitle.each(($title,index)=>{
            cy.log(index)
            cy.log($title.text().trim())

        })


    })
    
})