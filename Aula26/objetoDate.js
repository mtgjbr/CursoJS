// const tresHoras = 60*60*3*1000;
// const data = new Date(0+tresHoras) //01/01/1979 timestamp unix ou época unix 
// //função construtora,primeira letra maiuscula
// console.log(data.toString())
// const dataN = new Date;
// console.log(data.toString());
const data = new Date(2019, 3); //ano ,mês , dia , hora , segundo . milissegundo
const data2 = new Date ('2019-04-20 20:20:59'); //maneira date string de se usar o date
console.log('dia', data2.getDate());
console.log('mês', data2.getMonth()); // Mês começa do 0
console.log('ano', data2.getFullYear());
console.log('hora', data2.getHours());
console.log('min', data2.getMinutes());
console.log('seg', data2.getSeconds());
console.log('ms', data2.getMilliseconds());
console.log('dia semana', data2.getDay()) // 0 é domingo, 6- Sábado
console.log(data2.toString());

