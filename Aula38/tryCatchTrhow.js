// try{
// console.log(Naoexisto); //caso caia no erro vai pro catch
// } catch(err){
//     console.log("naoexistonao existe");
//    /// mostra o erro console.log(err)
// }

function soma (x,y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw new Error("x,y precisam ser numeros"); //lança erros (usar variaveis com Error)
    }
return x + y
}
try{ //se ocorrer erro o bloco catch é executado,caso contrario o bloco try será executado (tente (codigo) se nao pegue o erro)
console.log(soma(1,"a"))
} catch(error){
console.log(error)
}
