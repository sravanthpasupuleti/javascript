//class is a template/plan/blueprint to construct objects , if you create n no.of objects
//once object is created memory allocation is allocated
//class contains properties and methods


class std{
    constructor(name , id){
        this.name = name
        this.id = id
    }
    out(){
        return console.log(this.name+this.id)
    }
}
let std1 = new std("sravanth  " , 18)
console.log(std1)
//console.log(std1.out())
std1.out()

/*
class Account{
    acc_id;
    acc_name;
    acc_balance;
    min_balance = 0;
    open_acc(){
        console.log("account opened")
    }
    deposit_amount(){
        console.log("deposit amount")
    }
    withdraw_amount(){
        console.log("insufficient baance")
    }
    get_balance(){
        console.log("balance")
    }
    close_account(){
        console.log("account closed")
    }
}
let acc1 = new Account()
acc1.open_acc()
acc1.deposit_amount()
acc1.withdraw_amount()
acc1.get_balance()
acc1.close_account()

class emp{

}
let emp1 = new emp()
let emp2 = new emp()
let emp3 = new emp()
*/