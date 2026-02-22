 // it will execute the each and every element in an array , it doesn't change original array
 /*
 let sal = [ 50000 , 60000 , 70000]
 let newsal = sal.map(newsal => newsal + 10000)
 console.log(newsal)
 */


 let emp= [ {firstname : "sravanth" , salary : 50000 } ,
            { firstname : "royal" , salary : 60000},
            { firstname : "hlo" , salary : 70000}]
let newemp = emp.map(ele => { return { ...ele , salary : ele.salary+ 5000 }})
console.log(newemp)