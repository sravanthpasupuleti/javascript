console.log("hlooo")
orderPizza = (money) => {
    let pizza =new Promise((resolve , reject)=>{
        setTimeout(() => {
            if (money >= 500) {
                resolve("pizza is ready")
            }
            else{
                reject(new Error("something went wrong"))
            }
    },5000)
    })
    return pizza
}

let order = orderPizza(200);
order.then((res)=>{
    console.log(res)
    console.log("thanks for the pizza");
})
.catch((err)=>{
    console.log(err);
})