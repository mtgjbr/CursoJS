function mostraHora(){
    let data =new Date();

    return data.toLocaleTimeString("pt-Br",{
        Hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostraHora()); //função anonima
}, 1000)//configura intervalo de tempo pra uma função ser cahamda
//chama ela sem os ()
setTimeout(function(){ //função que para
    clearInterval(timer);
},10000)
setTimeout(function(){
    console.log("Ola mundo!")
},10000)