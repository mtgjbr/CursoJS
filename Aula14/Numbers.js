//IEE 754-2008
let num1 = 0.7; //number
let num2 = 0.1; // number
console.log(num1.toString()+ num2); //converte a variavel num1 para string
console.log(typeof num1 ) //continua como number 
//num1= num1.toString(); //vira uma string permanentemente
console.log(num1.toString(2));//converte para binario
console.log(num1.toFixed(2 ));//arredondamento
console.log(Number.isInteger(num1));// confere se o numero apresentado é um numero inteiro


let text = "ai" * num1;
console.log(Number.isNaN(text)); // verifica se é um não numero
console.log( text+ num1 );
// com + ele nao acusa true,pois ele cocatena se nao puder somar

