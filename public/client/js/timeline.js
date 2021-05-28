var timeline;

function createTimeline(){
    
    var additionalOptions = {
        // start_at_end: true,
        default_bg_color: { r: 39, g: 41, b: 61 },
        // timenav_height: 50,
        scale_factor: 1,
        initial_zoom:4,
        font: 'bitter-raleway',
        hash_bookmark: true,
        marker_padding: 10
    }
    timeline = new TL.Timeline('timeline-embed', mySlides, additionalOptions);
}

function loadWordClouds(id){
     var node = $(id)
      var checkExist = setInterval(function() {
        if (node.length) {
            var word_arrays
            eval("word_arrays = " + id.replaceAll('#','').replaceAll('-','_').slice(0, -1))
            var topicLetter = id.slice(-1)
            node.jQCloud(word_arrays[topicLetter], {
                // autoResize: true,
                // height: $('#word-cloud').parent().height(),
                // fontSize: function (width, height, step) {
                //     if (step == 1)
                //        return width * 0.02 * step + 'px';
                
                //     return width * 0.01 * step + 'px';
                //   },
                fontSize: {
                    from: 0.12,
                    to: 0.04
                  },
                  delayedMode: false, 
                  autoResize: true, 
                  height: node.parent("div").height(), 
                  width: node.parent("div").width(),
                  colors: ['#00D32D','#00A623','#01761A'],
            
            });
              
           clearInterval(checkExist);
        }
     }, 100); // check every 100ms

     
}


var clusters = ["A","B","C","D","E"]
$(window).resize(function(){
    generateClouds()
})
var currentLocation = document.location.hash;
 function main(){
    createTimeline()
    $(document).ready(function(){
        if(currentLocation != "event-covid-19-timeline-in-spainbr-2020-2021" && !currentLocation.includes("event-news") && currentLocation != '')
            generateClouds()
        

            $(".topic-circle").on('click', function(event){
                event.stopPropagation();
                event.stopImmediatePropagation();
                
                tmp = $(this).children().attr("id")
                generateTweets(tmp)
                
            });
    })
 }


 $(window).on('hashchange', function (e) {
    generateClouds()
});
function generateTweets(trigger){
    tsp = trigger.split("-")
    cluster = tsp[2].slice(-1)
    week = tsp[2].slice(0, -1);
    obj = tsp[0] + "_"+tsp[1]+"_"+week
    var word_arrays
    eval("word_arrays = " + obj)
    tweets = word_arrays["T"+cluster]
    $(".modal-body").html("")
    finalString = ""
    tweets.forEach(t => {
        finalString += `<button class="btn btn-twitter btn-block">
        <i class="fab fa-twitter"></i>  ` + t["text"] + `</button>` 
    });
    if(finalString == ""){
        finalString += `<button class="btn btn-block btn-warning">
        <i class="fab fa-twitter"></i>` + "  No Relevant tweets for this topic" + `</button>` 
    }
    $(".modal-body").html(finalString)
    $('#myModal').modal('toggle');

}
function generateClouds(){
    if(document.location.hash != "event-covid-19-timeline-in-spainbr-2020-2021" && !document.location.hash.includes("event-news") && document.location.hash != ''){
        clusters.forEach(element => {
            $(currentLocation+element).jQCloud('destroy');
        });
        clusters.forEach(element => {
            loadWordClouds(document.location.hash+element)
        });
    }
    if(document.location.hash.includes("event-news"))
        clusters.forEach(element => {
            $(currentLocation+element).jQCloud('destroy');
        });
     currentLocation = document.location.hash;
}

function openWindow(month){
    window.open('https://es.wikipedia.org/wiki/Anexo:Cronolog%C3%ADa_de_la_pandemia_de_COVID-19_en_Espa%C3%B1a#'+month, '_blank');
}