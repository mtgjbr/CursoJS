const nome = "Mateus";
const sobrenome = "Almeida";
const idade = 20;
const peso = 53;
const alturaEmM = 1.69;
let imc = peso / (alturaEmM * alturaEmM)

//calculo imc = peso / altura *altura
let anoNascimento = 2025 - idade;

console.log(`${nome},${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem, ${alturaEmM}de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome},nasceu em ${anoNascimento}.`);
