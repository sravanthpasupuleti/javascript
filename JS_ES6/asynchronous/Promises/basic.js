//promise is an object , that representing eventually complition of async operation
console.log("start")
let mypromise = new Promise((resolve , reject)=>{
    let money = 1000;
    if(money){
        resolve(money);
    }
})

mypromise.then((res)=> {
    console.log(res)
})

console.log(mypromise)

console.log(mypromise)