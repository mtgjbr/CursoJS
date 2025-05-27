/**
 * Primitivos(imutaveis) - string,number, boolean , undefined , null (bigint ,symboll)
 *  valores que vao ser copiados
 *
 */      //0123 
let nome= "luiz";
nome[0]= "r"; //string é imutavel
console.log(nome);
let a = "A";
let b = a; //tirado copia de a a variavel se
console.log(a, b);
a = "outra coisa"
console.log(a, b); //continua mesmo apos o a mudar pois a copia foi antes

/**
 *  referência (mutável) - array , object , fuction
 *  passados por referencia,se um mudar muda todos
 * 
 */

let c = [1, 2, 3];
let d = c ;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d)
//quando um é alterado os dois sao alterados pelos dois serem do mesmo lugar da memoria

