class Animal{

    set eyeColor(color){
        this._eyeColor=color
    }
    get eyeColor(){
        return this._eyeColor
    }

    _hairColor 
    get hairColor() {
            return this._hairColor
        }
    set hairColor(value) {
            this._hairColor = value
    }
     _typeAnimal
    get typeAnimal() {
        return this._typeAnimal
    }
    set typeAnimal(value) {
        this._typeAnimal = value
    }
}

let convit=new Animal()
convit.eyeColor="yellow"
convit._hairColor="short hair"
convit._typeAnimal="gia cam"
console.log(convit.eyeColor)
console.log(convit)