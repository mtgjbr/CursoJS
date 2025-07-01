const texto = document.querySelector(".lista-tarefas");

const tarefas = [
  { tag: 'li', texto: 'Estudar JavaScript' },
  { tag: 'li', texto: "Fazer exercício físico" },
  { tag: 'li', texto: "Beber água" },
  { tag: 'li', texto: "Ler por 15 minutos" },
];

function renderizaTarefas() {
  for (let i = 0; i < tarefas.length; i++) {
    const { tag, texto: conteudo } = tarefas[i]; // desestrutura as duas chaves do objeto

    const el = document.createElement(tag); // cria o elemento com a tag
    el.innerHTML = conteudo; // insere o texto no elemento
// ou usar o innerText
    texto.appendChild(el); // adiciona no container
  }
}

renderizaTarefas(); // chama a função
