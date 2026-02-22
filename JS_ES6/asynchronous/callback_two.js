 /*
 let calc = ( a, b, call) => {
    if(call == "sum"){
        return a + b
    }
    if(call == "multi"){
        return a * b
    }
 }
 let r1 = calc(10 , 20 , "sum")
 let r2 = calc(10 , 20 , "multi")
 console.log(r1)
 */


 let sum = ( a , b) => {
    return a+b
 }
 let multi = (a , b) => {
    return a*b
 }
 let cal = ( a, b, operation) => {
    return operation(a,b)
 }
 let r3 = cal( 2 ,3 , sum)
 let r4 = cal( 4 , 5, multi)
 console.log(r3)
 console.log(r4)