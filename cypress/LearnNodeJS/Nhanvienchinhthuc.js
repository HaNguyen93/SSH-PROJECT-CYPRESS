let Nhanvien=require("./Nhanvien")

class Nhanvienchinhthuc extends Nhanvien{

    constructor(name,id){
        super(name,id)
    }

    getSignContract(){
        console.log("go to HR to sign contract")
    }

}
module.exports=Nhanvienchinhthuc