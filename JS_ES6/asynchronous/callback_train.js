//tadipatri to bangalore
//busride -> traveltrain -> pg

console.log("start")

function tickets(busticket , trainticket){
    let busticketprice = 70
    let trainticketprice = 100
    busticket(busticketprice)
    trainticket(trainticketprice)
}
tickets(busride , trainride)

function busride(busticketprice){
    setTimeout( () => {
        console.log("i buy bus ticket price " ,busticketprice)
    },2000)
    setTimeout( () => {
        console.log("completed bus journey")
    },5000)
}

function trainride(trainticketprice){
    setTimeout( () => {
        console.log("i buy train ticket price " ,trainticketprice)
    },7000)
    setTimeout(() => {
        console.log("completed train journeey")
    },10000);
}