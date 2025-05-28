/**
 *  && -> caso ele ache o false antes,ele para de procurar e ja retorna o false,caso nao ache ele irá até o final , sempre irá retornar um valor possivel o quanto antes
 *  || -> vai retonar o valor verdadeiro primeiro
 */

console.log("mateus" && "ola" && "oi");
console.log("mateus" && 0  && "ie");
// false values = falsy : false , 0 , "" , null /undefined, NaN 

function falaoi (){
    return "oi";
}

const vaiExecutar = false;

console.log(vaiExecutar && falaoi());

console.log(0|| false || null || "luiz otavio"|| true)

const corUsuario = null //caso ele escolha uma cor a cor mostrada sera a dele
const corPadrao = corUsuario || "preto";
console.log(corPadrao);
