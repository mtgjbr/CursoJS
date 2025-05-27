// crie variaveis para cada um dos iniciais de Kanto, e em seguida printe para o usuário 
// (com os nomes) qual deles ele escolhe
const inicialFogo = "charmander";
const inicialGrama = "Bulbasaur";
const inicialAgua = "Squirtle";
console.log("Qual seu Pokemon inicial?", inicialAgua,",",inicialFogo,"ou o", inicialGrama,",", "escolha com sabedoria!");


let escolha = prompt("Escolha um Pokemon: \-n1"+inicialAgua+"\-n2"+inicialFogo+"\-n3"+inicialGrama);

switch (escolha) {
    case "1":
        alert("O clima hoje está ensolarado!");
        break;
    case "2":
        alert("Agora são " + new Date().toLocaleTimeString());
        break;
    case "3":
        alert("Por que o JavaScript foi ao terapeuta? Porque tinha muitos callbacks não resolvidos!");
        break;
    default:
        alert("Opção inválida. Tente novamente!");
}