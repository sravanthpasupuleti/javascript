// undefined vs not defined
//undefined -> when we create a variable but not assign the value to the var at that time if we try to access it,
                //you would get undefined;
//not defined -> when we create a variable inside a block scope or local scope and if we try to access it
                //then you would get the not defineed


var a = 10;
var b;
console.log(a);
console.log(b); //undefineed
// console.log(a + b);  //undefined + Number = NaN
// console.log(b + "ssss"); //undefinedssss , if we are using + then its adding
// console.log(b * "ssss"); //NaN
// console.log(b + b);//NaN

// if (1111) {
//     console.log("truee");
// }else{
//     console.log("falsee");
// }

function und(a , b){
    let c = 20;
    let d = a + b + c;
    return d;
}
// console.log(c);
// console.log(und(1,2));
console.log("csdfdsf");
console.log("csdfdsf");
console.log("csdfdsf");

//Note : undefined dont stop our code but not defined do.