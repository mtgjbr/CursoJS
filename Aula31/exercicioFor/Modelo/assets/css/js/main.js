const texto = document.querySelector(".container");

const elementos = [
  { tag: 'p', texto: "olá" },
  { tag: 'div', texto: "meu nome" },
  { tag: 'footer', texto: "é" },
  { tag: 'section', texto: "mateus" },
];

function renderizaElementos() {
  for (let i = 0; i < elementos.length; i++) {
    const { tag, texto: conteudo } = elementos[i]; // desestrutura as duas chaves do objeto

    const el = document.createElement(tag); // cria o elemento com a tag
    el.innerHTML = conteudo; // insere o texto no elemento
// ou usar o innerText
    texto.appendChild(el); // adiciona no container
  }
}

renderizaElementos(); // chama a função
