let num1= 0.7;
let num2 = 0.1;

//num1 = ((num1*100)+ ( num2* 100))/100; outra maneira de conversao
console.log(num1);
num1 += num2;//0.8                  // num1 = //num1+num2
num1 += num2;//0.9
num1 += num2;//1.0
num1 += num2;//1.1
num1 += num2;//1.2
num1 += num2;//1.3
num1 += num2;//1.4
num1 += num2;//1.5
num1 += num2;//1.6
num1 += num2;//1.7
num1 += num2;//1.8
num1 += num2;//1.9
num1 += num2;//2.0


num1= parseFloat(num1.toFixed(2));//parenteses dão a função
console.log(num1); //
console.log(Number.isInteger(num1)); //não é considerado inteiro antes da conversão
//2 é inteiro,2.1 não.