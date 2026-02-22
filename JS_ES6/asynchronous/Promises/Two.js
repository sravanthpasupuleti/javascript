let Drwamoney = (money) => {
    return new Promise((res , rej)=>{
        console.log("take these money",money);
        setTimeout(()=>{
            if (money > 200) {
                console.log("your order is confirmed")
                let pizz = "chicken pizza"
                res(pizz)
            }
            else{
                rej(new Error("please give extra money"))
            }
        },3000)
    })
}


let makingPizza = (piz) =>{
    return new Promise((res , rej) => {
        setTimeout(()=>{
            console.log("take your ",piz)
            res(piz)
        },3000)
    })
}


let eatingPizza = (eat) => {
    return new Promise((res , rej)=>{
        setTimeout(()=>{
            res(eat)
        },3000)
    })
}


Drwamoney(500)
.then((pizz)=>{
    console.log("wait some time for your ",pizz);
    return makingPizza(pizz)
}).then((eat)=>{
    return eatingPizza(eat)
}).then((eat)=>{
    console.log("now i am happily eated my",eat);
})

.catch((val)=>{
    val.msg
})