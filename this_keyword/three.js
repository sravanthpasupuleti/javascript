let emps = {
    firstName : "hlo",
    lName : "hiiii",
    getName : function(fName , lName){
        return fName +" "+ lName;
    }
}

console.log(emps.getName(emps.firstName , emps.lName));