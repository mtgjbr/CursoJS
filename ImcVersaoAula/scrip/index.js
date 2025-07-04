const form = document.querySelector(".form");

form.addEventListener(`submit`, function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');        // ta informando o elemento que ta recebendo o evento
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
        setResultado("peso invalido", false);
        return; //so vai retornar se o if for executado
    }

    if (!altura) {
        setResultado("altura invalida", false)
        return;
    }
    const imc = getImc(peso, altura);
    const Nivelimc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${Nivelimc}).`;
    setResultado(msg,true)
});

function getNivelImc(imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3']; //indíces dos arrays está indo de 0 a 5
    if (imc >= 39.9) {return nivel[5];}
    if (imc >= 34.9) {return nivel[4];}
    if (imc >= 29.9) {return nivel[3];}
    if (imc >= 24.9) {return nivel[2];}
    if (imc >= 18.5) {return nivel[1];}
    if (imc < 18.5)  {return nivel[0];}



}
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function criaP() {
    const p = document.createElement('p');
    return p

}
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = " "; //zera a área do resultado
    const p = criaP();

 if(isValid){
   p.classList.add('paragrafo-resultado');

 } else{
    p.classList.add("bad")
 }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
