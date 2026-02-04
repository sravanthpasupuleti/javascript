let emp = {
    firstname : "sravanth" ,
    lastname  : "pasupuleti",
    grades : [ 25 , 27 , 28],
    fullname : (fname , lname) =>  fname + " " + lname ,
}
let final = emp.fullname(emp.firstname , emp.lastname)
//console.log(final)


let std = {
    first_name : "pasupuleti" ,
    last_name : "sravanth" ,
    hair : { color : "black" , style : "silky"} ,
    std_id : 18,
    std_fullname : function(){
        return this.first_name + " " + this.last_name
    }
}
let std_name = std.std_fullname();
console.log(std_name)