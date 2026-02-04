// class std{
//     constructor(x , y){
//       this.first_name = x
//        this.last_name = y
//        this.hands = 2
//      }
//     fullname(){
//         return this.first_name + " " + this.last_name + "  " + this.hands +  " hands "
//     }
// }
// const std1 = new std("sravanth" , "royal")
// console.log(std1)
// const std2 = new std("heyy" , "hloo")
// console.log(std2.first_name)
// const std3 = new std("aaaa" , "bbbb")
// console.log(std3.fullname())


class employee{
  constructor(name , sal , id){
    this.name = name
    this.salary = sal
    this.id = id
  }
  getdetails(){
    return  this.salary + " " + this.id + " " + " " + this.name
  }
}
let emp2 = new employee("sravanth" , 60000 , 18)
console.log(emp2)