var timeline;
//Funcion que se encarga de inicializar la linea temporal
function createTimeline() {

  var additionalOptions = {
    default_bg_color: { r: 39, g: 41, b: 61 },
    scale_factor: 1,
    initial_zoom: 4,
    font: 'bitter-raleway',
    hash_bookmark: true,
    marker_padding: 10
  }
  //mySlides se declara en el archivo slides.js como una variable, de esta forma solo con cambiar ese archivo toda la linea temporal cambia
  timeline = new TL.Timeline('timeline-embed', mySlides, additionalOptions);
}
//Funcion que se encarga de inicializar la nube de palabras para un cluster a partir de su ID 
function loadWordClouds(id) {
  var node = $(id)
  var checkExist = setInterval(function () {
    if (node.length) {
      var word_arrays
      eval("word_arrays = " + id.replaceAll('#', '').replaceAll('-', '_').slice(0, -1)) //En este punto se recoge la informacion relacionada a ese ID de words.js, unicamente almacenando aquella semana en concreto
      var topicLetter = id.slice(-1)
      node.jQCloud(word_arrays[topicLetter], {
        fontSize: {
          from: 0.12,
          to: 0.04
        },
        delayedMode: false,
        autoResize: true,
        height: node.parent("div").height(),
        width: node.parent("div").width(),
        colors: ['#00D32D', '#00A623', '#01761A'],

      });

      clearInterval(checkExist);
    }
  }, 100); // Esta funcion se ejecuta hasta que encuentra ese identificador, una vez hecho se detiene


}

//Funcion que se encarga de generar todas las nubes de palabras para cada uno de los topicos que se ven en la pantalla
function generateClouds() {
  //Se utiliza el hash que tiene la url en ese momento para obtener los identificadores de esa diapositiva
  if (document.location.hash != "event-covid-19-timeline-in-spainbr-2020-2021" && !document.location.hash.includes("event-news") && document.location.hash != '') {
    clusters.forEach(element => {
      $(currentLocation + element).jQCloud('destroy'); //Se borran los clusters anteriores
    });
    clusters.forEach(element => {
      loadWordClouds(document.location.hash + element) //Se cargan las nuevas palabras atraves de su identificador
    });
  }
  if (document.location.hash.includes("event-news"))
    clusters.forEach(element => {
      $(currentLocation + element).jQCloud('destroy');
    });
  currentLocation = document.location.hash;
}

var clusters = ["A", "B", "C", "D", "E"]
$(window).resize(function () {
  generateClouds()  //Cuando se reescala la pagina tambien se vuelven a generar los cluster con el tamaño adecuado
})
var currentLocation = document.location.hash;

//Funcion que se ejecuta una vez se carga este archivo
function main() {
  createTimeline() //Inicializar la linea temporal
  $(document).ready(function () {
    if (currentLocation != "event-covid-19-timeline-in-spainbr-2020-2021" && !currentLocation.includes("event-news") && currentLocation != '') //si al cargar la pagina esta se encuentra en una diapositiva con clusters, se encarga de generar las nubes de palabras
      generateClouds()


    $(".topic-circle").on('click', function (event) {
      event.stopPropagation();
      event.stopImmediatePropagation();

      tmp = $(this).children().attr("id")
      generateTweets(tmp)
    });
  })
}


$(window).on('hashchange', function (e) {
  generateClouds() //Cuando se pasa de diapositiva, el cambio de hash en la URL se registra y se vuelven a generar las nubes de palabras
});
function generateTweets(trigger) {
  tsp = trigger.split("-")
  cluster = tsp[2].slice(-1)
  week = tsp[2].slice(0, -1);
  obj = tsp[0] + "_" + tsp[1] + "_" + week
  var word_arrays
  eval("word_arrays = " + obj)
  tweets = word_arrays["T" + cluster]
  $(".modal-body").html("")
  finalString = ""
  tweets.forEach(t => {
    finalString += `<button class="btn btn-twitter btn-block">
        <i class="fab fa-twitter"></i>  ` + t["text"] + `</button>`
  });
  if (finalString == "") {
    finalString += `<button class="btn btn-block btn-warning">
        <i class="fab fa-twitter"></i>` + "  No Relevant tweets for this topic" + `</button>`
  }
  $(".modal-body").html(finalString)
  $('#myModal').modal('toggle');

}
// Funcion que se encarga de expirar el token de inicio de sesion
var delete_cookie = function (name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

//Evento que se dispara cuando el usuario de desloguea
$("#logout-button").on("click", function () {

  delete_cookie('token');
  window.location.href = "/login"

});

main()
