let employees=[
    {"eid":1,"ename":"Sax","gender":"Bigender"},
    {"eid":2,"ename":"Hillard","gender":"Male"},
    {"eid":3,"ename":"Esra","gender":"Male"},
    {"eid":4,"ename":"Greer","gender":"Female"},
    {"eid":5,"ename":"Noel","gender":"Female"},
    {"eid":6,"ename":"Annice","gender":"Female"},
    {"eid":7,"ename":"Dianemarie","gender":"Female"},
    {"eid":8,"ename":"Rosalind","gender":"Female"},
    {"eid":9,"ename":"Augustina","gender":"Female"},
    {"eid":10,"ename":"Conchita","gender":"Female"},
    {"eid":11,"ename":"Fairleigh","gender":"Non-binary"},
    {"eid":12,"ename":"Roxanna","gender":"Female"},
    {"eid":13,"ename":"Witty","gender":"Male"},
    {"eid":14,"ename":"Marlo","gender":"Female"},
    {"eid":15,"ename":"Antonetta","gender":"Bigender"},
    {"eid":16,"ename":"Willetta","gender":"Female"},
    {"eid":17,"ename":"Anthiathia","gender":"Female"},
    {"eid":18,"ename":"Merrilee","gender":"Female"},
    {"eid":19,"ename":"Waldo","gender":"Male"},
    {"eid":20,"ename":"Lesly","gender":"Female"},
    {"eid":21,"ename":"Stanislaus","gender":"Agender"},
    {"eid":22,"ename":"Odelle","gender":"Female"},
    {"eid":23,"ename":"Jean","gender":"Female"},
    {"eid":24,"ename":"Elise","gender":"Female"},
    {"eid":25,"ename":"Sayers","gender":"Male"}]

    // let i =0;
    // while(i < employees.length){
    //     console.log(employees[i].ename)
    //     i++
    // }

    // for(empname of employees){
    //     console.log("ename : "+empname.ename + " eid : "+empname.eid)
    // }

    for(male_emp of employees){
        if(gender === "Male"){
            console.log(male_emp.ename)
        }
    }