// it will gives output as only one value

// let arr = [ 1 , 2, 3, 4, 5 ]
// function summ(a){
//     let sum=0;
//     for(ar of arr){
//         sum = ar + sum
//     }
//     console.log(sum)
// }
// summ(arr);


// let newarr = arr.reduce((a , b) => { return  a + b } , 0)
// console.log(newarr)



 
// function findmax(){
//     let big = 0
//     for(let i=0 ; i<max.length ; i++){
//      if(max[i] > big){
//         big = max[i]
//      }
//     }
//     return big;
// }
// let final = findmax(max)
// console.log(final)

let max = [ 20 , 30 , 50 , 10 , 40]
let final2 = max.reduce((intitialize , element) => { if(element > intitialize){ intitialize = element} return intitialize},0 )
    console.log(final2)

