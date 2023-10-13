describe("test",()=>{

    it("no within",()=>{
        cy.visit("https://www.simplyrecipes.com/")
        cy.get(".card__title").each(($card_title,index)=>{
            cy.log(index)
        })
    })

    it("with within",()=>{
        cy.visit("https://www.simplyrecipes.com/")
        cy.get(".showcase__hero").within(()=>{
            cy.get(".card__title").each(($card_title,index)=>{
                cy.log(index)
            })

        })
     
    })

    it.only("with find",()=>{
        cy.visit("https://www.simplyrecipes.com/")
        cy.get(".showcase__hero").find(".card__title").each(($card_title,index)=>{
            cy.log(index)
        })
     
    })

})