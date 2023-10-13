class Hero_Component{

    static COMP_SEL=".showcase__hero"

    constructor(component){
        this.component = component
    }
    get CardTitle(){
        return this.component.find('.card__title')
    }

}

module.exports=Hero_Component