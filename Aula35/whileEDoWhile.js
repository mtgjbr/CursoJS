//usado pra quando nao se sabe quando vezes a repetição vai ocorrer
let i = 0; //variavel criado fora
const nome = "luiz"
while (i < nome.length) { //vai funcionar ate o tamanho da variavel de verificação 
    console.log(nome[i]);
    i++
}
console.log("segue a vida")



testef = "mateus"
for (let io = 0; io < testef.length; io++) {
    console.log(testef[io])
}

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}
const min = 1;
const max = 50;
//let rand = random(min, max);
let rand = 10

while (rand !== 10) { //enquanto ele for diferente de 10 executa
    rand = random(min, max);
    console.log(rand)
}
console.log("##############")
do {
    //primeiro ele atualiza sem o valor sem conferir o antigo
        rand = random(min, max);
        console.log(rand)
    } while (rand !== 10)