function Meuescopo() {
   const form = document.querySelector(".form")
   const resultado = document.querySelector('.resultado')
   const pessoas = [];

   function recebeEventoForm(evento) {
      evento.preventDefault();

      const nome = form.querySelector('.nome')
      const sobrenome = form.querySelector('.sobrenome')
      const peso = form.querySelector('.peso')
      const altura = form.querySelector('.altura')


      resultado.innerHTML += `${nome.value} ${sobrenome.value} `+ `${peso.value} ${altura.value} <p/>`;
      const ObjetoP = { tName:nome.value, tSobrenome:sobrenome.value, taltura:altura.value, tpeso:peso.value }
     
      pessoas.push(ObjetoP);
      console.log(pessoas);




   }



   form.addEventListener('submit', recebeEventoForm);

}

Meuescopo();
//maneira do professor 
/** pessoas.push{(
 *  nome:nome.value,
 * sobrenome:sobrenome.value,
 * peso:peso.value,
 * altura:atura.value
 * )};
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */