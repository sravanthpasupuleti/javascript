let pr = new Promise( (resolve , reject) => {
    setTimeout(() => {
        let sal  = [ 1 , 2, 3, 4, 5]
        if(sal){
            resolve(sal)
        }
    }, 3000);
})
pr.then( (salary) => {
    return salary
}).then( (msg) => {
    console.log(msg)
})
console.log(pr)
