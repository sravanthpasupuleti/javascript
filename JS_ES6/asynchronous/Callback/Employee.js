class Employee{
    constructor(id , name , salary){
        this.emp_id = id;
        this.emp_name = name;
        this.emp_salary = salary;
    }
    work(){
        console.log("my name is ",this.emp_name,"and",this.emp_id,"is my id ","and my salary is",this.emp_salary);
        this.doProject();
    }
    doProject(){
        console.log("i built a full stack projects");
    }
}
let emp1 = new Employee(1, "ashok", 50000);
emp1.work();
let emp2 = new Employee(2, "sravanth", 50000);
emp2.work();