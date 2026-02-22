console.log("start")
let pizza;
orderpizza = (eating) => {
    setTimeout(()=>{    
    pizza = "chicken pizza";
    console.log("this is your pizza",pizza);
    eating(pizza);
    },3000)
}

orderpizza((hlo) => {
    setTimeout(()=>{
         console.log("i completed eating ",hlo)
    },3000)
}
);

console.log("end")