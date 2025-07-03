const paragrafos = document.querySelector(".paragrafo");

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
const ps = paragrafos.querySelectorAll("p"); //seleciona todos os p da div "paragrafos"
for (let p of ps){
    p.style.backgroundColor = backgroundColorBody; //ESCOLHE TODOS OS PARAGRAFOS E APLICA A COR 
    p.style.color =`#FFFFFF` //CAMEL CASE ADICIONA O STYLE EM CSS
}