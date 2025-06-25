// let tem escopo de bloco {...bloco}
// var só tem escopo de função

const verdadeira = true;
let nome = 'luiz'; // escopo global
var nome2 = "Otavio"; 
var nome2 = "otavio" //redeclarada b
if (verdadeira){
    let nome = "otavio" //outra variavel com mesmo nome,não é a mesma variavel
    var nome2 = "rogerio"
    console.log(nome, nome2)
    if (verdadeira){ 
        var nome2 = " outra coisa";
        let nome = "outra coisa" 
    }
}
console.log(nome,nome2)

var sobrenome = "Miranda"
 function falaOi(){
    console.log(sobrenome);
    
 }

 falaOi();
 //elevação de variaveis usando var:todas as variaveis ja são declaradas em cima de forma implicita,com let ele só fala que nã está definido 