//this is a pointer pointing to curent object
class account{
    min_balance = 500
    bank_balance = 0
    deposit(amount){
        this.bank_balance = this.bank_balance + amount
    }
    withdraw(amount){
        this.bank_balance = this.bank_balance - amount
    }
    get_balance(){
        this.bank_balance
    }
}
let user1 = new account
user1.deposit(500)  
user1.deposit(100)  
console.log(user1)   
user1.withdraw(100)  
console.log(user1)  
user1.get_balance()
console.log(user1)