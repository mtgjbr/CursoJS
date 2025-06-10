let resultado = document.querySelector('#resultado');
console.log("Batata");
data = new Date();

function ZeroAEsquerda (num){
    return num >=10 ?num : `0${num}`;
}
function getHorario(data) {
    const hora = ZeroAEsquerda(data.getHours());
    const min = ZeroAEsquerda(data.getMinutes());
    return `${hora}:${min}`

}

function getdiasemana(data) {
    const diaN = data.getDay()
    switch (diaN) {
        case 0:
            diasemana = "Domingo"
            return diasemana
        case 1:
            diasemana = "Segunda-feira"
            return diasemana
        case 2:
            diasemana = "Terça-feira"
            return diasemana
        case 3:
            diasemana = "Quarta-feira"
            return diasemana
        case 4:
            diasemana = "Quinta-feira"
            return diasemana
        case 5:
            diasemana = "Sexta-feira"
            return diasemana
        case 6:
            diasemana = "Sabado"
            return diasemana
    }
}
function getmes(data) {
    const diaM = data.getMonth();
    switch (diaM) {
        case 0:
            getmes = "Janeiro"
            return getmes
        case 1:
            getmes = "fevereiro"
            return getmes
        case 2:
            getmes = "Março"
            return getmes
        case 3:
            getmes = "Abril"
            return getmes
        case 4:
            getmes = "Maio"
            return getmes
        case 5:
            getmes = "Junho"
            return getmes
        case 6:
            getmes = "Julho"
            return getmes
        case 7:
            getmes = "Agosto"
            return getmes
        case 8:
            getmes = "Setembro"
            return getmes
        case 9:
            getmes = "Outubro"
            return getmes
        case 10:
            getmes = "Novembro"
            return getmes
        case 11:
            getmes = "Dezembro"
            return getmes
    }
}
const semana = getdiasemana(data);
const horario = getHorario(data);
const mes = getmes(data);
const ano = data.getFullYear();
dia= data.getDate();
resultado.innerHTML = `${semana}, ${dia} de ${mes} de ${ano}</P> ${horario}`;
console.log(data.getMonth())