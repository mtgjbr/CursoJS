let a = "a";//b
let b = "b";//c
let c = "c";//a
 const letras = [b, c, a];
 [a, b, c] = letras ;
 
 console.log(a,b,c)
 //...rest ...spread

//                0      1      2    3     4     5     6     7     8
 const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [um, , tres,,cinco, , sete] = numeros; //define a variavel para pegar o resto,rest
//ele pega os números respectivamente na ordem
console.log(um, tres, cinco);

 