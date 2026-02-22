let emp_details = [
    { name : "sravanth" , salary : 70000} ,
    { name : "royal" , salary : 60000} ,
    { name : "hlo" , salary : 50000} ,
    { name : "hey" , salary : 80000} ,
]
let emp = emp_details.filter(empp => empp.salary >= 70000).map(names => names.name)
//console.log(emp)
// let name_only = emp.map(names => names.name)
// console.log(name_only)


let emp2 = emp_details.reduce((initialize , elememnt) => {
    if(elememnt.salary >= 70000){
        initialize.push(elememnt.name)
    }
    return initialize
} ,[])
console.log(emp2)