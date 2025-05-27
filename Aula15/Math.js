let num1 = 9.53578;
console.log(num1 ** (0.5)); //raiz quadrada numero elevado a 1/2
let  num2= Math.floor(num1); //arredonda pra baixo
console.log(num2);
let num3 = Math.ceil(num1); //arredonda pra cima
console.log(num3);
let num4 = Math.round(num1); // arredonda para o numero inteiro mais proximo
console.log(num4);
console.log(Math.max(1,2,3,4,5,6,-10,1500,9,8,7,6)); //procura o maior numero da sequencia
console.log(Math.min(1,2,3,4,5,6,-10,1500,9,8,7,6)); //procura o menor numero da sequencia
let aleatorio = Math.round(Math.random()* (10 - 5)+5); //o ultimo parenteses defini um parametro minimo maximo
console.log(aleatorio)
console.log(Math);
num1 =  num1.toFixed(2);
console.log(` o número escolhido com duas casas decimais ${num1}`);
