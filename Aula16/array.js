const nome = "luiz otavio"
//                 0     1       2   indices do array
const alunos = ["Luiz", "Maria", "João"];
alunos[0] = "eduardo"; //ALTERA o indice 0 do array
alunos.unshift("Luizito"); //adiciona no começo do array
alunos.unshift("fafa");
//alunos[3] = "Luiza"; // ADICIONANDO elementos AO array
//alunos[alunos.length] = "Joao" //outra maneira de fazer ADICIONANDO AO FIM
alunos.push("Otavio"); // insire no Array de maneira mais facil ADICIONANDO AO FIM

console.log(alunos); //escolhendo o index especifico dentro do array
console.log(alunos.length) // sabendo o tamanho do array

const removido = alunos.pop(); //remove o ultimo elemento e salva na variavel removido
console.log(alunos);
console.log(removido);
alunos.shift();//remove o primeiro elemento
delete alunos[1]; //deleta um indice
console.log(alunos.slice(0,-2)); //recorta do elemento 0 ao -2 ignorando os dois ultimos