class Bank{
    acc_name;
    acc_number;
    acc_amount;
    min_balance = 500;
    constructor(acc_name , acc_number, acc_amount){
        this.acc_name = acc_name
        this.acc_number = acc_number
        this.acc_amount = acc_amount
        console.log("account is opened")
    }
    deposit(amount){
        this.acc_amount = this.acc_amount + amount
    }
    withdraw(amount){
        this.acc_amount = this.acc_amount - amount
    }
    balance(){
        console.log(`your balance is ${this.acc_amount - this.min_balance}`) 
    }
}
let user1 = new Bank("sravanth" , 18 , 1500)
console.log(user1)
user1.deposit(500)
console.log(user1)
user1.withdraw(200)
console.log(user1)
user1.balance()
