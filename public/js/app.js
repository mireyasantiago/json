var cargarPagina = function (){
  cargarPokemones();
  //$(document).on("click",'.pokemon', mostrarModal);
};


var cargarPokemones = function (){
  $.getJSON("http://pokeapi.co/api/v2/pokemon/",
   function (response) {
  	var pokemons = response.results;
  	crearPokemons(pokemons);
  });
};

var crearPokemons = function (pokemons) {
	var div =$("#pokemons");// row

	pokemons.forEach(function (pokemon , i) {
    var columna = $("<div />" ,{ "class" : "col s4"});// columnas
		var a = $('<a/>');
    var imagenPokemon = $("<img/>");
    imagenPokemon.attr("src", imagenPokemones[i].imagen );// imagen propiedad de mi objeto
    a.attr("data-nombre", pokemon.url);
    a.text(pokemon.name );

    columna.append(imagenPokemon).append(a);// estructurar primero en html para ser mas visual
    div.append(columna);

    //console.log(pokemon);
	});
}


var mostrarDatos = function (){
  var PokemonesImg = $(this).data("url");
  var contenedor = $('#pokemons');
  $.getJSON(pokemonesImg, function (response) {
  contenedor.html( plantilla.replace('__Nombre__', response.name)
  .replace('__imagen__'   , response.src)
);
});
}

var plantillaModal =
'<div id="modal1" class="modal">' +
  '<div class="modal-content">' +
  '  <h4>Modal Header</h4>' +
  '<h5>__Nombre__</h5>' +
  '<img src="__imagen__" alt="imagen">' +
  '<button type="button" name="button">__Caracteristicas__ </button>'
  '<div class="modal-footer">' +
    '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>' +
'  </div>' +
'</div>';


//3  se crean un objeto con las imagenes
var imagenPokemones = [
 {
  "imagen" :"./img/poke1.png"
},
 {
 "imagen" :"./img/poke2.png"
},
{
"imagen" :"./img/poke3.png"
},
{
"imagen" :"./img/poke4.png"
},

{
"imagen" :"./img/poke5.png"
},
{
"imagen" :"./img/poke6.png"
},
{
"imagen" :"./img/poke2.png"
},
{
"imagen" :"./img/poke3.png"
},
{
"imagen" :"./img/poke4.png"
},

{
"imagen" :"./img/poke5.png"
},
{
"imagen" :"./img/poke6.png"
},

{
"imagen" :"./img/poke2.png"
},
{
"imagen" :"./img/poke3.png"
},
{
"imagen" :"./img/poke4.png"
},

{
"imagen" :"./img/poke5.png"
},
{
"imagen" :"./img/poke6.png"
},
{
"imagen" :"./img/poke2.png"
},
{
"imagen" :"./img/poke3.png"
},
{
"imagen" :"./img/poke4.png"
},

{
"imagen" :"./img/poke5.png"
}
];


 var mostrarModal = function(){

 }



$(document).ready(cargarPagina);
