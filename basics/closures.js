// console.log("start")

// function aaa(){
//  var x = 10;
//     return function bbb(){
//         console.log(x)
//         console.log("it is bbb")
//     }
// }
// var ccc = aaa()
// ccc()

// console.log("end")


let b1 = 10
function a1(){
    let b2 = 20;
    function a2(){
        console.log(b2)
    }
    a2();
}
a1();