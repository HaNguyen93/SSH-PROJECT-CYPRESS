import Hero_Component from '../component/Hero_Component.js'
class SRHomePage{
    heroComponent(){
        return new Hero_Component(cy.get(Hero_Component.COMP_SEL))
    }

}

module.exports=SRHomePage