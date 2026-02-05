// function aa(){
//     console.log("aaa");
//     bb();
// }
// function bb(){
//     console.log("bb");
//     aa();
// }

// aa();

function prime(a){
    count = 0;
    for(i = 1; i <= a; i++){
          if(a%i == 0){
            count += 1;
          }
    }
    if(count == 2 ){
        console.log(a+" is prime number");
    }else{
        console.log(a+" is not a prime number");
    }
}
prime(4);