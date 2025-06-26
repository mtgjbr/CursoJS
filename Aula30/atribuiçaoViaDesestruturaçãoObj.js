const pessoa = {
    nome: "luiz",
    sobrenome:"miranda",
    idade:30,
    endereco:{
      rua:"avenida brasil",
      numero:320
    }

};
/// atribuição via desestruturação
const {nome:teste= "",sobrenome} = pessoa ; // o "Nome" é a chave de onde vai ser pego e o teste é o real nome da variavel
console.log(teste,sobrenome)
const {endereco:{rua,numero, endereco}} = pessoa //pra pegar um dado de um objeto dentro de um objeto
console.log(rua,numero);

const {nome, ...resto} = pessoa
console.log(nome,resto)