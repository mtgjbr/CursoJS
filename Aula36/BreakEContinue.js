const numeros = [1,2,3,4,5,5,6,7,8,9];
for(let numero of numeros){
    if (numero === 2){
        console.log("pulei o numero 2")
        continue;  //pula a condição sem executar o resto do codigo,colocar sempre antes da ação
    }
    console.log(numero);
    if( numero === 7){
        console.log("7 encontrado,saindo...");
        
        break // sai do bloco assim que a condição for atendida
    }

}