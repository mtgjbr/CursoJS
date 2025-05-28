const numero = 10;
// se (numero >= 0 && numero <=5) ocorrer, faça isso{código}
if (numero >= 0 && numero <= 5) {
    console.log("Sim,o número está entre 0 e 5.")
} else if (numero >= 6 && numero <= 8) { //assim que encontrar o primeiro verdadeiro ele acaba imediatamente (criar outro ifs para executar mais de uma função)  
    console.log("o número está entre 6 e 8.")
} else if (numero >= 9 && numero <= 11){
 console.log("O número está entre 9 e 11");
} else {
    console.log("o numero não está entre 0 e 11")
}

