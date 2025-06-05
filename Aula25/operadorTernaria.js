//? :
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "usuario vip": "usuario normal";
// (condição) ? "valor para verdadeiro" : "valor para falso"; 
const corUsuario = null
const corPadrao = corUsuario || "preta" //settando valor padrão para variavel,fallback
/* if(pontuacaoUsuario>= 1000){
    console.log("usuario vip")
 }
 else{
    console.log("usuario normal")
 }
 */
console.log(nivelUsuario,corPadrao)