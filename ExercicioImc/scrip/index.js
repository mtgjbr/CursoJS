function Meuescopo() {
   
   let resultado = document.querySelector('.resultado')

function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const alturaEmM = parseFloat(altura.value);
    const pesoEmKg =parseFloat(peso.value);
    let imc = pesoEmKg / (alturaEmM * alturaEmM);
   
    if (imc<18.5){
        resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (abaixo do peso).`;
        
    }
    else if(imc>18.5 && imc<24.9){
        resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (peso ideal)`
    }

    
}
  document.addEventListener('submit', recebeEventoForm);
}
Meuescopo();
