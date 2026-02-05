var year = new Date().getFullYear();
console.log(year);    //2026

var full_date = new Date().toLocaleDateString();
console.log(full_date);  //30/01/2026

var get_date = new Date().toLocaleTimeString();
console.log(get_date); //12:19:47 pm

let date = new Date();
console.log(date);

let year = new Date().getFullYear();
console.log(year);  //it return only year  2026

let time = new Date().toLocaleTimeString();
console.log(time);  //it gives only time including minutes and seconds and am or pm

let dateee = new Date().toLocaleDateString();
console.log(dateee);    //it return year/month/date 5/2/2026