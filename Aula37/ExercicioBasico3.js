
function FizzBuzz(num) {

    if (num % 5 === 0 & num % 3 === 0) { //modulo de n e 5,3
        console.log("fizzBuzz")
    }
    else if (num % 5 === 0) {
        console.log("Buzz")
    }
    else if (num % 3 === 0) {
        console.log("fizz")
    }
    else if (isNaN(num)){
        console.log(num)
    }
    else{
        console.log(num)
    }

}

for(let i=0;i<=100;i++){
    FizzBuzz((i))
}
