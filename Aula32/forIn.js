//for in -> lê os indices ou chaves do objeto
const frutas = ["pera", "maçã", "uva"];

// for(let i= 0; i<frutas.length;i++){
//     console.log(frutas[i])
// }

const pessoa = {
    nome: "Luiz",
    sobrenome:"otavio",
    idade:30
};
console.log(pessoa.idade);
console.log(pessoa['nome'])

for (let i in pessoa){
    console.log(i,pessoa[i])
};