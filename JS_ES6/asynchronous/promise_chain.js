console.log("start")

let draw_money = (amount , eat) => {
    let money = 1000
    amount(money)
    eat()
}
let order_pizza = (amount) => {
    let fooditem = "pizza"
    if( amount >= 500){
        console.log("please wait for ",fooditem)
        setTimeout(() => {
            console.log("your order pizza is cmpleted")
        }, 10000);
    }
}

let eat_pizza = (fooditem) => {
    setTimeout(() => {
        console.log("thanks for giving " , fooditem)
    }, 3000);
}

draw_money(order_pizza , eat_pizza)