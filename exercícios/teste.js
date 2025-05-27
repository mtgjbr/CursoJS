function criaPokemon(nome, tipo, ataque) {
    return {nome, tipo, ataque };
};
const pokemons =[];
const catatau = criaPokemon("catatau", "fogo", "melee");
const osmar = criaPokemon("osmar", "terra" , "melee")
pokemons.push(catatau);
pokemons.push(osmar);
console.log(pokemons);

