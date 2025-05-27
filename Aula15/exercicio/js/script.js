let numero = prompt("digite um número");
numero = Number(numero);

 const numeroTitulo = document.getElementById("numero-titulo");
 const texto = document.getElementById("texto");

 

 numeroTitulo.innerHTML = numero;
 texto.innerHTML += `<p> A raiz quadrada dele é ${numero **(0.5)}  .</p>`;
 texto.innerHTML += `<p> Ele é um número? ${isNaN(numero)} .</p>`;
 texto.innerHTML += `<p> O número escolhido arredondado para baixo é ${Math.ceil(numero)}  .</p>`;
 texto.innerHTML += `<p> O número escolhido arredondado para cima é : ${Math.floor(numero)}  .</p>`;
 texto.innerHTML += `<p> o número escolhido com duas casas decimais ${numero.toFixed(2)}.</p>`;
 texto.innerHTML += `<p> Ele é inteiro? ${Number.isInteger(numero)}</p>`; //nao esquecer do number.
 