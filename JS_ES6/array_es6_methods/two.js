let emp_details = [
    { name : "sravanth" , salary : 70000 , loc : "hyderabad"} ,
    { name : "royal" , salary : 60000 , loc : "bangalore"} ,
    { name : "hlo" , salary : 50000 , loc : "hyderabad"} ,
    { name : "hey" , salary : 80000 , loc : "pune"} ,
]

let emp = emp_details.reduce((initialize , element) => {
    if(initialize[element.loc]){
        initialize[element.loc] = ++initialize[element.loc]
    }
    else{
        initialize[element.loc] = 1
    }
    return initialize
},{})
console.log(emp)