console.log("start")

function withdraw(order_pizza_forme){
    setTimeout(() => {
        let money = 1000
        console.log("i withdraw ",money);
        order_pizza_forme(money , eatpizza)
    }, 3000);
}
withdraw(orderpizza , eatpizza)

function orderpizza(money , eating){
    console.log("i ordered pizza")
    setTimeout( () => {
        if(money >= 500){
            let fooditem = "pizza"
            console.log("i got my  ",fooditem)
            eating(fooditem)
        }
    },5000)
}

function eatpizza(fooditem){
    setTimeout(() => {
        console.log("now i eat ",fooditem)
    },2000)
}
