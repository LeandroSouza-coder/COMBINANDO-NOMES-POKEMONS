// Função que completa o nome do Pokémon
function combinandoNomesPokemons(palavra) {
    // Objeto com os prefixos conhecidos e seus respectivos nomes completos
    const pokemons = {
        "Bulba": "Bulbasaur",
        "Ivy": "Ivysaur",
        "Venu": "Venusaur",
        "Char": "Charmander",
        "Charme": "Charmeleon",
        "Chariza": "Charizard",
        "Squi": "Squirtle",
        "Warto": "Wartortle",
        "Blas": "Blastoise"
    };
    
    // Retorna o nome completo se encontrar no objeto, senão retorna um aviso
    return pokemons[palavra] || "Nome desconhecido";
}

// Entrada da palavra usando gets()
var nomeEntrada = gets();

// Chamando a função e armazenando o resultado
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada
print(palavraGerada);
