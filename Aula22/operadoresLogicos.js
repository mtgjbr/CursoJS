/**
 * 
 * && -> AND -> E (todas as expressões precisam ser verdadeiras para retornar true)
 * || -> OR -> OU (se apenas uma estiver correto retorna true)
 * ! -> NOT -> NÃO (invertes)
 * 
 * 
 */
const expressaoAnd = true && true && true && false;
console.log(expressaoAnd); 
const expressaoOr =  true ||false || true || false || false;
console.log(expressaoOr);
 
const usuario = "Luiz";
const senha = 123456;

const vailogar = usuario === "Luiz" && senha === 123456;
console.log(vailogar) // apenas se o usuario e a senha estiverem corretos ele irá logar

console.log(!true) 