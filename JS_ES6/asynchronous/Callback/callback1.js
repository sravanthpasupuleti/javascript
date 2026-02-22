console.log("start");
let pizza;
orderPizza = (food) => {
    setTimeout(()=>{
    pizza =  "Chicken pizza"
    console.log("salesperson : Take your ",pizza);
    food(pizza)
    } , 3000)
} 

eat = (pizz) => {
    setTimeout(() => {
        console.log("custumer : i completed eating my",pizz)
        leaving(pizz)
    },3000)
}

leaving = (pizz) => {
    setTimeout(()=>{
        console.log("custumer : now i am leaving thanks for tasty",pizz)
        Thanks()
    },2000)
}

Thanks = () => {
    setTimeout(()=> {
        console.log("sales : thanks for coming see you next time")
    },1000)
}

orderPizza(eat);

console.log("end");