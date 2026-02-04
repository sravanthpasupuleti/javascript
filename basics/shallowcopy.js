/*
let arr = [ 90 , 80 , 70 , 60]
let b = arr
let c = [...arr]
console.log(arr)
console.log(b)
console.log(c)
console.log("***********")
b[1] = 10
c[2] = 20
console.log(arr)
console.log(b)
console.log(c)
*/


let std1 = {
    std_fname : "sravnth" ,
    std_lname : "pasupuleti",
}
let std2 = {...std1}
std2.std_fname = "royal"
std1.std_fname = "venkata"
console.log(std2.std_fname)
console.log(std1.std_fname)