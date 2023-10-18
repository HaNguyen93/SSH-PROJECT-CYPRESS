class Person{
    constructor(name,age){
        this.name=name
        this.age=age

    }

    talk(){
        console.log(" hello")
    }
    getInfo(){
        console.log("name: ",this.name)
        console.log("age: ",this.age)
    }
}

module.exports=Person