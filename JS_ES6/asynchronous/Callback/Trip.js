// biketaxi() --> train() --> havebiryani()

console.log("start")

Biketaxi = (tr) => {
    setTimeout(()=>{
        console.log("now im in biketaxi")
    
    tr(biryani = () => {
        console.log("now i am having biryani")
    });
    },3000)
}



Biketaxi(train = (biry) => {
    setTimeout(()=>{
        console.log("now i am coming in train")
    biry();
    },2000)

});