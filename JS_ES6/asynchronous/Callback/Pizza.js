console.log("start")

let money;
let pizza;

let DrawMoney = (pizz) => {
    money = 400;
    setTimeout(()=> {
        console.log("here is money",money)
        pizz(money , eatpizza = (food) => {
    setTimeout(()=> {
        console.log("i completed eating my ",food)
    },3000)
})
    },2000)
}

let orderPizza = (money , eating) => {
    pizza = "chicken pizza";
    if (money>=400) {
        setTimeout(()=>{
            console.log("your order",pizza,"is confirmed");
            eating(pizza);
        },2000)
    } else {
        console.log("pease give another",400-money,"for",pizza)
    }
}

DrawMoney(orderPizza);
console.log("end")