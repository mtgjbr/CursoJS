const pessoa1 = {
 nome:"luiz",
 sobrenome: "Miranda",
 idade:25,

 Fala(){
 console.log(`${this.nome} ${this.sobrenome} está falando oi`);

 }, // a cada novo ponto imporante é uma ,
 incrementaIdade(){
 ++this.idade;

 }
};

pessoa1.Fala();