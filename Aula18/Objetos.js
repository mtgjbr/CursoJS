//objeto literal
const pessoa1 = { // estrutura de dados que comporta varias variaveis dentro dela
    nome: "luiz",
    sobrenome: "miranda",
    idade: 25
};

console.log(pessoa1.nome); // acessando os valores que estao dentro do objeto pessoa 1

function criaPessoa(nome, sobrenome, idade) {
    return {nome,sobrenome,idade}; //factory //função exemplificada
}

const pessoa2 = criaPessoa ("luiza","miranda",25)//argumento é o valor que é passado para o parametro
const pessoa3 = criaPessoa ("maria","oliveira",32)//argumento é o valor que é passado para o parametro
const pessoa4 = criaPessoa ("joao","moreira",55)//argumento é o valor que é passado para o parametro
const pessoa5 = criaPessoa ("junior","lara",44)//argumento é o valor que é passado para o parametro
const pessoa6 = criaPessoa ("jean","otavio",69)//argumento é o valor que é passado para o parametro

console.log(pessoa2.idade, pessoa1.nome , pessoa3.nome)
