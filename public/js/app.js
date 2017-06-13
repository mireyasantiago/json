var cargarPagina = function (){
  cargarPokemones();
  $('.modal').modal();
  $(document).on("click", "abrir", obtenerDatos);
  
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
    var columna = $("<div />" ,{ "class" : "col s3"});// columnas
    var a = $('<a/>', {"class":" abrir text-center"});
    var imagenPokemon = $("<img/>");
    imagenPokemon.attr("src", imagenPokemones[i].imagen );// imagen propiedad de mi objeto
    a.attr("data-nombre", pokemon.url);
    a.text(pokemon.name );

    columna.append(imagenPokemon).append(a);// estructurar primero en html para ser mas visual
    div.append(columna);

    //console.log(pokemon);
  });
}

var plantilla =
'<div id="modal1" class="modal">' +
'<div class="modal-content">' +
'<h5>__nombre__</h5>' +
'<img src="__imagen__" alt="imagen">' +
"<p><label>Habitat:</label>__habitat__</p>" +
"<p><label>Color:</label>__color__</p>" +
"<p><label>Forma:</label>__shape__</p>" +
"<p><label>Genera:</label>__genera__</p>" +
'<div class="modal-footer">' +
'<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>' +
'  </div>' +
'</div>';



var obtenerDatos = function(pokemons){
  var nombre = $(this).text(); //se pone en el objeto
  var imagen = $(this).next().attr("src");// puede ser prev()
  var caracteristicas= $(this).data("nombre");
  $.getJSON(caracteristicas, function(response){
    var caracteristicaSOlicitada = response.species.url;
    $.getJSON(caracteristicaSOlicitada, function(response){
      var habitat = response.habitat.name;
      var color = response.color.name;
      var shape = response.shape.name;
      var genera = response.genera[0].genus;

      mostrarDatos({
        nombre: nombre,
        imagen: imagen,
        habitat: habitat,
        color: color,
        shape: shape,
        genera: genera
      });
    });
  });
};



var mostrarDatos = function(datos){
  var modalPoke = $("#modalPokemones");
  var plantillaFinal = "";
  mostrarDatos.forEach(function (datos){
    plantillaFinal += plantilla.replace("__nombre__", datos.nombre)
    .replace("__nombre__", datos.nombre)
    .replace("__imagen__", datos.imagen)
    //    .replace("__name__", datos.nombre)
    .replace("__habitat__", datos.habitat)
    .replace("__color__", datos.color)
    .replace("__shape__", datos.shape)
    .replace("__genera__", datos.genera)
    modal.html (plantillaFinal);

  });
};

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
    "imagen" :"./img/poke7.png"
  },
  {
    "imagen" :"./img/poke8.png"
  },
  {
    "imagen" :"./img/poke9.png"
  },

  {
    "imagen" :"./img/poke10.png"
  },
  {
    "imagen" :"./img/poke11.png"
  },

  {
    "imagen" :"./img/poke12.png"
  },
  {
    "imagen" :"./img/poke13.png"
  },
  {
    "imagen" :"./img/poke14.png"
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


$(document).ready(cargarPagina);
