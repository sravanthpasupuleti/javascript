let stud = {
    firstName : "sravanth",
    lastName : "royal",
    age : 22,
    marks : [50,60,70],
    address : {pincode : 560037 , street : "marathahalli"},
    // getFullname : function(fName , lName){
    //     return fName + " " + lName;
    // },
    getName : function(){
        return this.firstName + " "+ this.lastName;
    }
}

//this -> 

// function getFullname(fName , lName){
//     return fName + " " + lName
// }

// let fullName = stud.getName(stud.firstName, stud.lastName);
// console.log(fullName);   //sravanth royal

let namee = stud.getName();
console.log(namee);