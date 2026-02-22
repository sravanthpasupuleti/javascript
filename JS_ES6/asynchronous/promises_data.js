let employees = [
    { eid : 1 , ename : "sravanth" , esal : 50000},
    { eid : 2 , ename : "srav" , esal : 60000},
]
create_emp =(empp) => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            let flag = false
            if(flag){
                resolve("data inserted")
            }
            else{
                reject("cancel")
            }
            employees.push(empp)
        }, 4000);
    })
}
display_emp =() => {
    setTimeout( () => {
        let rows =""
        for(employe of employees){
            rows = rows + `<tr>
            <td>${employe.eid}</td>
            <td>${employe.ename}</td>
            <td>${employe.esal}</td>
           </tr>`
        } 
        document.getElementById('table_body').innerHTML=rows
    },1000)
}
create_emp({ eid : 3 , ename : "heyy" , esal : 70000})
.then((msg) => {
    console.log(msg)
    display_emp()
})
.catch( (canc) => {
    console.log(canc)
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         