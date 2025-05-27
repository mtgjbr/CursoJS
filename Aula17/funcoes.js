function saudacao(nome){ // bloco de código reutilizável que executa uma tarefa específica. recebendo o parametro nome
 //console.log(`bom dia ${nome}!`);
 return `bom dia ${nome}!`;
}
// nao retorna nada sem return
const variavel = saudacao("Luiz"); //sempre que chama uma função precisa de ()
console.log(variavel)
//função de declaração classica
function soma (x=1, y=1){ //mesmo sem mandar os valores para a função ela segue fazendo com esses valores
const resultado = x + y;//as variaveis dentro da função sao inacessaveis de fora
return resultado //ele chama a soma e o que ele retorna que é exibido para o console.log
} // return encerra a função
console.log(soma(2,2)); //o primeiro parenteses é o do log o segundo é a da função soma

//função anonima dentro de variaveis
const raiz = function (n) { //variavel raiz igual a função anonima
 return n ** 0.5;
};
console.log(raiz(9));

//arrow functions
const raizz = n => n **0.5
console.log(raizz(25));