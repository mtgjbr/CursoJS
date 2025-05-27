//              1234567
let umaString= "Um texto";
let outraString = "O rato roeu a roupa do rei de roma."
console.log(umaString.indexOf("texto",2));//busca do indice a partir da posição 2
console.log(umaString.charAt(3)) // busca o texto na posisição 3 //umaString[3]
console.log(umaString.lastIndexOf("U",3)); //mesma coisa so com eça a procura de tras pra frente
console.log(umaString.match(/[a-z]/g)); // procura todas as letras minusculas
console.log(umaString.search(/[x]/g)); // ele mostra o indice onde está o elemento escolhido
console.log(umaString.replace(/Um/, 'Outra'));// muda um elemento da string
console.log(outraString.replace(/r/g,"#")); //muda todos os R 
console.log(outraString.length); // conta os quantos indices tem desprezando 0
console.log(outraString.slice(2,6));//recorta os elementos dos indices 2 a 6
console.log(outraString.split(" ")); //divide os elementos pelo parametro indicado
console.log(outraString.toLocaleUpperCase());//transforma as strings em letra maisculas
console.log(outraString.toLocaleLowerCase()); //tranforma as strings em letras minusculas
//o G representa todos
//indice= posição numerica que cada elemento tem em uma string
//[] caracteres procurados
//quiser pegar as ultimas partes da string use - como em slice(-4)
