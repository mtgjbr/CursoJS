//iterar
const nome = ["luiz","otavio","henrique"];

// for(let i=0 ;i<nome.length;i++)[
//     console.log(nome[i])
// ]
// for(let i in nome){
//     console.log(nome[i])
// }
for (let valor of nome){
    console.log(valor);
}
//for classico - geralmente com iteraveis (arrays ou strings)
//for in - retonra o indice ou chave (strings arrays ou onjetos)
// for off - retorna o valor em si (iteraveis, arrays, ou strings)