let input = require('prompt-sync')();
let num = parseInt(input('enter a nmuber :'));

if(num%2 == 0){
    console.log("even");
}else{
    console.log("odd");
}