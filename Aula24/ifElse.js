/**
 * Entre 0-11 - Bom dia
 * Entre 12 - 17 - Boa tarde
 * Entre 18 - 23 - Boa noite
 */
const hora = 50;
if (hora >= 0 && hora <= 11) { // se hora for menor que 12 e maior que 0 ele dá bom dia
    console.log("bom dia")  //caso seja atendida todo o if sera realizado
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde")
} else if (hora >= 18 && hora <= 23) { //else if = caso anterior não seja atendida, ele irá para a proxima até atender uma
    console.log("Boa noite"); // else if= ou então
} else { // se não
    console.log("hora não registrada")
}
/**
 * if pode ser usado sozinho,else não
 * podem ser usados inumeros else ifs, porém, apenas um else
 */

const tenhoDinheiro = true;
if(tenhoDinheiro){ //não precisa do === true pois ja é bo
    console.log("irei sair");

}else{
    console.log("ficarei em casa") 
} // não precisa de ; pra abriri e fechar,diferente de funções e obj