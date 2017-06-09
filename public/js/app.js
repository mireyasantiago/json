$.getJSON("http://pokeapi.co/api/v2/pokemon/",
 function (response) {
	var pokemons = response.results;
	crearPokemons(pokemons);
});



var crearPokemons = function (pokemons) {
	var div =$("#pokemons");

	pokemons.forEach(function (pokemon) {
		var span = $('<span/>', { 'class': 'col s2 margen__pokemon'  });
	 span.text(pokemon.name);

		div.append(span);
	});

}
