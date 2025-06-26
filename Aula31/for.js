// i - index
// definindo variavel de controle, definido a condição até que ponto ela irá ser executada
// incrementando ela a cada vez adicionando 1 
for (let i= 0; i <=5; i++ ){
 const par= i % 2 === 0 ? "par": "Impar";//verificando se é par ou impar
 
 console.log(i,par)
}
const frutas = ["Maca", "pera", "uva" ];
//console.log(frutas.length)
for (let i=0; i< frutas.length; i++){
    console.log(`Ìndice ${i} ${frutas[i]}`) //pega a fruta referente ao numero
}