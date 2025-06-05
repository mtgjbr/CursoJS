

function GetDiaSemanaTexto(diasemana) {
    let diasemanaTexto;
    switch (diasemana) { //variavel a ser checada
        case 0:
            diasemanaTexto = 'Domingo';
              return diasemanaTexto;
        case 1:
            diasemanaTexto = 'Segunda';
              return diasemanaTexto;
        case 2:
            diasemanaTexto = 'Terça';
              return diasemanaTexto;
        case 3:
            diasemanaTexto = 'Quarta';
             return diasemanaTexto;
        case 4:
            diasemanaTexto = 'Quinta';
              return diasemanaTexto;
        case 5:
            diasemanaTexto = 'Sexta';
              return diasemanaTexto;
        case 6:
            diasemanaTexto = 'Sábado';
              return diasemanaTexto;
        default:
            diasemanaTexto = " ";
              return diasemanaTexto; //ou / break para finalizar switch case
    }
  
}


// if(diasemana ===0){
//     diasemanaTexto= 'domingo';
// }
// else if(diasemana ===1){
//     diasemanaTexto= 'segunda';
// }
// else if(diasemana ===2){
//     diasemanaTexto= 'terça';
// }
// else if(diasemana ===3){
//     diasemanaTexto= 'quarta';
// }
// else if(diasemana ===4){
//     diasemanaTexto= 'quinta';
// }
// else if(diasemana ===5){
//     diasemanaTexto= 'sexta';
// }
// else if(diasemana ===6){
//     diasemanaTexto= 'sábado';
// }
const data = new Date('1987-04-21 00:00:00');
const diasemana = data.getDay();
const diasemanaTexto = GetDiaSemanaTexto(diasemana)
const abacate = GetDiaSemanaTexto(diasemana) 
console.log(diasemana + " " + diasemanaTexto)
console.log(abacate)

/**
 * const data = new Date('1987-04-21 00:00:00');
const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const numeroDia = data.getDay(); // retorna 0 a 6
const nomeDia = diasDaSemana[numeroDia]; // acessa o nome correspondente

console.log(numeroDia + " " + nomeDia);
formula utilizando array
 */