try {
    // console.log(a) //com erro
    console.log("abri um arquivo");
    console.log("manipulei o arquivo e gerou erro");
    console.log("fechei o arquivo");
    // é executadas quando não há erros
} catch (e) {
    console.log("tratando o erro");
    // é executado quando há erros
} finally {
    console.log("eu sempre sou executado")
    //sempre 
}
function retornaHora (data){
    if (data && !(data instanceof Date)){
        throw new TypeError("nao é");
}
 if (!data){
    data = new Date();
    
 }
 return data.toLocaleTimeString("pt-BR",{
 hour12: false
 });
}
try{
const hora = retornaHora(11);
console.log(hora)
} catch{
    //tratar error
}
finally{
    console.log("Tenha um bom dia")
}

// data instanceof Date → verifica se data é uma instância de Date.
// !() → inverte o resultado.
// Ou seja: "se NÃO for um Date, mostre a mensagem".
//  typeof verifica o tipo primitivo (como "string", "number", etc), enquanto instanceof verifica se um valor é uma
//  instância de uma classe ou função construtora (como Date, Array, Error).