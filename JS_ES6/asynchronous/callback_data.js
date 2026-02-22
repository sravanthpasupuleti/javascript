let employees = [
    {e_id : 1 , e_name : "sravanth" , e_salary : 70000},
    {e_id : 2 , e_name : "srav" , e_salary : 60000}
]
let create_employee = (emp , display) => {
    setTimeout( () => {
        employees.push(emp)
        display()
},4000)
}
let display_employee = () => {
    setTimeout( () => {
        let rows = ""
        for(let employe of employees){
            rows = rows + `<tr>
            <td>${employe.e_id}</td>
            <td>${employe.e_name}</td>
            <td>${employe.e_salary}</td>
            </tr>`
        }
        document.getElementById('table_body').innerHTML=rows
},1000)
}
create_employee({e_id : 3 , e_name : "hloo" , e_salary : 80000} , display_employee)