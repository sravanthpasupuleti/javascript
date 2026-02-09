//==(doulbe equals) is a loose equality operator which compares the only valuse
//===(triple equals) is a strict eqaulity operator which compares the both values and datatype

let a = 5;
let b = "5";
let c = '5';
console.log(a == b);
console.log(a == c);

console.log(a === b);
console.log(a === c);

let aa = 1;
let bb = 1.00000001;
console.log(aa == bb);
console.log(aa === bb);