let Nhanvienchinhthuc=require("./Nhanvienchinhthuc")
let Nhanvienthoivu=require("./Nhanvienthoivu")

let teo=new Nhanvienchinhthuc("teo","001")
let ty= new Nhanvienthoivu("ty", "002")

console.log(teo)
console.log(teo.getExtraSalary())
teo.getSignContract()


console.log(ty)
console.log(ty.getExtraSalary())

