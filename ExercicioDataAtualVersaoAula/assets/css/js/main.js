const h1 = document.querySelector('.container h1');
const data = new Date();

function ZeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
function GetDiaSemanaTexto(diasemana) {
    const diassemana = ["domingo", "segunda", "terça", "quarta", "quinta","sexta","sábado"];
    return diassemana[diasemana]

}
function GetNomeMes(numeroMes) {
   const meses=["janeiro", "fevereiro", "Março", "abril", "maio", "Junho", "Julho", "Agosto", "setembro", "outubro", "novembro", "dezembro"];
 return meses[numeroMes]
}
function criadata(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth()

    const nomeDia = GetDiaSemanaTexto(diaSemana);
    const nomeMes = GetNomeMes(numeroMes);
    return (
        `${nomeDia}, ${data.getDate()} ${nomeMes}` +
        ` de ${data.getFullYear()} ${ZeroAEsquerda(data.getHours())}:${ZeroAEsquerda(data.getMinutes())}`
    );
}
 h1.innerHTML = criadata(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// const opcoes = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit'
// };
//  // Exibe data + hora
// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);