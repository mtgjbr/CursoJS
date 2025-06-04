function Meuescopo() {

    let resultado = document.querySelector('.resultado')

    function recebeEventoForm(evento) {
        evento.preventDefault();
 //id= # , class = .
        const peso = parseFloat(document.querySelector('#peso').value);
        const altura = parseFloat(document.querySelector('#altura').value);
        let imc = peso / (altura * altura);


        if (imc < 18.5) {
            resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (abaixo do peso).`;

        }
        else if (imc > 18.5 && imc < 24.9) {
            resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (peso ideal)`;
        }
        else if (imc > 25 && imc < 29.9) {
            resultado.innerHTML = `seu imc é ${imc.toFixed(2)} (sorbepeso)`;

        }
        else if (imc > 30 && imc < 34.9) {
            resultado.innerHTML = `seu imc é ${imc.toFixed(2)} (obesidade grau 1)`;

        }
        else if (imc > 35 && imc < 39.9) {
            resultado.innerHTML = `seu imc é ${imc.toFixed(2)} (sobesidade grau 2)`;
        }
        else if (imc > 40) {
            resultado.innerHTML = `seu imc é ${imc.toFixed(2)} (obesidade grau 3)`;
        }
        else if (isNaN(imc)) {
            resultado.innerHTML = "insira um número valido"
        }

    }
    document.addEventListener('submit', recebeEventoForm);
}
Meuescopo();
