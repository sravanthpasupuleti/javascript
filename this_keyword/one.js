
let students = {
    first_name : "sravanth" ,
    last_name : "royal",
    roll_num : 18,
    section : "A" ,
    getfullname : function(){
         return this.first_name + this.last_name
    }
}
let finalname = students.getfullname()
// console.log(finalname)


// console.log(this)  //{}

// function hlo(){
//     console.log(this)
// }
// hlo();

// let std = {
//     a : 20,
//     name : "sravnth", 
//     b : function() {
//         console.log(this)
//         //console.log(this.name)
//     }
// }
// std.b()


let std2 = {
    aa : 21,
    name : "royal",
    bb : () => {
        console.log(thi.name)
    }
}
std2.bb()  //{}


// let std3 = {
//     aaa : 18,
//     name : "hloo",
//     bbb : function(){
//         x = () => {
//             console.log(this);
//             console.log(this.name)
//         }
//         x();
//     }
// }
// console.log(std3.bbb)