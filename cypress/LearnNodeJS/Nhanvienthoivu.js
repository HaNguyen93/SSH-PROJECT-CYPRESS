let Nhanvien=require("./Nhanvien")

class Nhanvienthoivu extends Nhanvien{

    constructor(name,id){
        super(name,id)
    }

    getExtraSalary(){
        return 0
    }

}

module.exports=Nhanvienthoivu