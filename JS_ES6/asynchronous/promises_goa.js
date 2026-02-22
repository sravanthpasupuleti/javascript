 
 /*
 let gotogoa = ( success , failure) => {
    let acc_bal = 15000
    if(acc_bal >= 10000) {
        success("enjoy")
    }
    else{
        failure("study")
    }
 }
 gotogoa
 */


 //promise has one function that function has definitely two parrmetrs 
 //resolve parameter means success , this parameter is use .then for printing after time 
 //reject pararmeter means failure
 let gotogoa = new Promise((resolve , reject) => {
    setTimeout( ()  => {
        let acc_bal = 5000
        if(acc_bal >= 10000){
            resolve("you are eligible to go goa")
        }else{
            reject(new Error("you are not eligible to goa"))
        }
    } , 3000)  
 })
 gotogoa.then((suc) => {
    console.log(suc)
 }).catch( (fail) => {
    console.log(fail)
 })
