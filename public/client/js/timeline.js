var timeline;

function createTimeline(){
    var myjson = {
        "title": {
            "media": {
                "url": "https://www.redpal.es/wp-content/uploads/2020/03/covid-1.png",
                    // "caption": "<br>a",
                //    "credit": "flickr/<a href='http://www.flickr.com/photos/tm_10001/'>tm_10001</a>"
            },
            "text": {
                "headline": "COVID-19 Timeline in Spain<br/> 2020 - 2021",
                "text": '<p>Covid timeline in Spain</p> <img src="https://www.redpal.es/wp-content/uploads/2020/03/covid-1.png" >'
            },
            "background": {
                "color": "#0084b4"
            },
        },
        "events": [
            {"start_date":{"month":"03","day":"21","year":"2020"},"end_date":{"month":"03","day":"28","year":"2020"},"text":{"headline":"Week 14","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-14A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-14B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-14C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-14D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-14E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"03","day":"28","year":"2020"},"end_date":{"month":"03","day":"31","year":"2020"},"text":{"headline":"Week 15","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-15A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-15B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-15C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-15D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-15E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"04","day":"01","year":"2020"},"end_date":{"month":"04","day":"07","year":"2020"},"text":{"headline":"Week 16","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-16A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-16B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-16C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-16D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-16E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"04","day":"07","year":"2020"},"end_date":{"month":"04","day":"14","year":"2020"},"text":{"headline":"Week 17","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-17A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-17B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-17C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-17D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-17E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"04","day":"14","year":"2020"},"end_date":{"month":"04","day":"21","year":"2020"},"text":{"headline":"Week 18","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-18A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-18B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-18C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-18D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-18E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"04","day":"21","year":"2020"},"end_date":{"month":"04","day":"28","year":"2020"},"text":{"headline":"Week 19","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-19A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-19B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-19C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-19D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-19E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"04","day":"28","year":"2020"},"end_date":{"month":"04","day":"30","year":"2020"},"text":{"headline":"Week 20","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-20A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-20B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-20C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-20D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-20E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"05","day":"01","year":"2020"},"end_date":{"month":"05","day":"07","year":"2020"},"text":{"headline":"Week 21","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-21A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-21B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-21C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-21D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-21E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"05","day":"07","year":"2020"},"end_date":{"month":"05","day":"14","year":"2020"},"text":{"headline":"Week 22","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-22A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-22B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-22C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-22D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-22E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"05","day":"14","year":"2020"},"end_date":{"month":"05","day":"21","year":"2020"},"text":{"headline":"Week 23","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-23A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-23B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-23C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-23D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-23E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"05","day":"21","year":"2020"},"end_date":{"month":"05","day":"28","year":"2020"},"text":{"headline":"Week 24","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-24A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-24B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-24C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-24D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-24E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"05","day":"28","year":"2020"},"end_date":{"month":"05","day":"31","year":"2020"},"text":{"headline":"Week 25","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-25A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-25B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-25C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-25D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-25E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"06","day":"01","year":"2020"},"end_date":{"month":"06","day":"07","year":"2020"},"text":{"headline":"Week 26","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-26A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-26B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-26C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-26D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-26E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"06","day":"07","year":"2020"},"end_date":{"month":"06","day":"14","year":"2020"},"text":{"headline":"Week 27","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-27A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-27B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-27C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-27D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-27E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"06","day":"14","year":"2020"},"end_date":{"month":"06","day":"21","year":"2020"},"text":{"headline":"Week 28","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-28A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-28B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-28C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-28D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-28E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"06","day":"21","year":"2020"},"end_date":{"month":"06","day":"28","year":"2020"},"text":{"headline":"Week 29","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-29A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-29B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-29C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-29D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-29E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"06","day":"28","year":"2020"},"end_date":{"month":"06","day":"30","year":"2020"},"text":{"headline":"Week 30","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-30A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-30B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-30C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-30D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-30E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"07","day":"01","year":"2020"},"end_date":{"month":"07","day":"07","year":"2020"},"text":{"headline":"Week 31","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-31A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-31B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-31C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-31D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-31E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"07","day":"07","year":"2020"},"end_date":{"month":"07","day":"14","year":"2020"},"text":{"headline":"Week 32","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-32A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-32B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-32C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-32D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-32E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"07","day":"14","year":"2020"},"end_date":{"month":"07","day":"21","year":"2020"},"text":{"headline":"Week 33","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-33A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-33B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-33C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-33D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-33E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"07","day":"21","year":"2020"},"end_date":{"month":"07","day":"28","year":"2020"},"text":{"headline":"Week 34","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-34A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-34B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-34C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-34D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-34E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"07","day":"28","year":"2020"},"end_date":{"month":"07","day":"31","year":"2020"},"text":{"headline":"Week 35","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-35A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-35B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-35C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-35D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-35E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"08","day":"01","year":"2020"},"end_date":{"month":"08","day":"07","year":"2020"},"text":{"headline":"Week 36","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-36A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-36B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-36C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-36D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-36E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"08","day":"07","year":"2020"},"end_date":{"month":"08","day":"14","year":"2020"},"text":{"headline":"Week 37","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-37A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-37B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-37C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-37D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-37E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"08","day":"14","year":"2020"},"end_date":{"month":"08","day":"21","year":"2020"},"text":{"headline":"Week 38","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-38A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-38B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-38C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-38D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-38E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"08","day":"21","year":"2020"},"end_date":{"month":"08","day":"28","year":"2020"},"text":{"headline":"Week 39","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-39A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-39B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-39C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-39D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-39E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"08","day":"28","year":"2020"},"end_date":{"month":"08","day":"31","year":"2020"},"text":{"headline":"Week 40","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-40A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-40B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-40C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-40D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-40E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"09","day":"01","year":"2020"},"end_date":{"month":"09","day":"07","year":"2020"},"text":{"headline":"Week 41","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-41A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-41B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-41C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-41D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-41E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"09","day":"07","year":"2020"},"end_date":{"month":"09","day":"14","year":"2020"},"text":{"headline":"Week 42","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-42A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-42B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-42C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-42D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-42E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"09","day":"14","year":"2020"},"end_date":{"month":"09","day":"21","year":"2020"},"text":{"headline":"Week 43","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-43A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-43B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-43C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-43D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-43E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"09","day":"21","year":"2020"},"end_date":{"month":"09","day":"28","year":"2020"},"text":{"headline":"Week 44","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-44A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-44B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-44C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-44D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-44E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"09","day":"28","year":"2020"},"end_date":{"month":"09","day":"30","year":"2020"},"text":{"headline":"Week 45","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-45A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-45B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-45C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-45D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-45E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"10","day":"01","year":"2020"},"end_date":{"month":"10","day":"07","year":"2020"},"text":{"headline":"Week 46","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-46A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-46B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-46C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-46D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-46E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"10","day":"07","year":"2020"},"end_date":{"month":"10","day":"14","year":"2020"},"text":{"headline":"Week 47","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-47A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-47B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-47C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-47D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-47E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"10","day":"14","year":"2020"},"end_date":{"month":"10","day":"21","year":"2020"},"text":{"headline":"Week 48","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-48A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-48B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-48C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-48D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-48E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"10","day":"21","year":"2020"},"end_date":{"month":"10","day":"28","year":"2020"},"text":{"headline":"Week 49","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-49A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-49B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-49C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-49D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-49E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"10","day":"28","year":"2020"},"end_date":{"month":"10","day":"31","year":"2020"},"text":{"headline":"Week 50","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-50A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-50B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-50C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-50D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-50E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"11","day":"01","year":"2020"},"end_date":{"month":"11","day":"07","year":"2020"},"text":{"headline":"Week 51","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-51A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-51B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-51C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-51D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-51E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"11","day":"07","year":"2020"},"end_date":{"month":"11","day":"14","year":"2020"},"text":{"headline":"Week 52","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-52A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-52B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-52C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-52D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-52E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"11","day":"14","year":"2020"},"end_date":{"month":"11","day":"21","year":"2020"},"text":{"headline":"Week 53","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-53A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-53B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-53C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-53D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-53E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"11","day":"21","year":"2020"},"end_date":{"month":"11","day":"28","year":"2020"},"text":{"headline":"Week 54","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-54A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-54B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-54C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-54D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-54E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"11","day":"28","year":"2020"},"end_date":{"month":"11","day":"30","year":"2020"},"text":{"headline":"Week 55","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-55A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-55B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-55C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-55D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-55E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"12","day":"01","year":"2020"},"end_date":{"month":"12","day":"07","year":"2020"},"text":{"headline":"Week 56","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-56A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-56B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-56C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-56D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-56E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"12","day":"07","year":"2020"},"end_date":{"month":"12","day":"14","year":"2020"},"text":{"headline":"Week 57","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-57A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-57B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-57C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-57D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-57E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"12","day":"14","year":"2020"},"end_date":{"month":"12","day":"21","year":"2020"},"text":{"headline":"Week 58","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-58A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-58B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-58C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-58D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-58E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"12","day":"21","year":"2020"},"end_date":{"month":"12","day":"28","year":"2020"},"text":{"headline":"Week 59","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-59A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-59B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-59C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-59D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-59E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},{"start_date":{"month":"12","day":"28","year":"2020"},"end_date":{"month":"12","day":"31","year":"2020"},"text":{"headline":"Week 60","text":`
<div class="row mr-auto ml-auto">
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-60A"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-60B"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-60C"></div>
</div>
</div>
</div>
<div class="row mr-auto ml-auto">
<div class="col-md-2 col-sm-1"></div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-60D"></div>
</div>
</div>
<div class="col-md-4 col-sm-2">
<div class="topic-circle">
<div id="event-week-60E"></div>
</div>
</div>
<div class="col-md-2 col-sm-1"></div>
</div>
`},"background":{"color":"#0084b4"},},
{"start_date":{"month":"01","day":"01","year":"2020"},"end_date":{"mon1th":"01","day":"07","year":"2020"},"text":{"headline":"News Week 1","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"01","day":"07","year":"2020"},"end_date":{"mon1th":"01","day":"14","year":"2020"},"text":{"headline":"News Week 2","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"01","day":"14","year":"2020"},"end_date":{"mon1th":"01","day":"21","year":"2020"},"text":{"headline":"News Week 3","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"01","day":"21","year":"2020"},"end_date":{"mon1th":"01","day":"28","year":"2020"},"text":{"headline":"News Week 4","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">El Ministerio de Sanidad define los criterios que debe cumplir un enfermo para hacerle la prueba del coronavirus: haber estado en Wuhan (China) o en contacto con personas que ya hayan dado positivo.[1]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"01","day":"28","year":"2020"},"end_date":{"mon1th":"01","day":"31","year":"2020"},"text":{"headline":"News Week 5","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"02","day":"01","year":"2020"},"end_date":{"mon1th":"02","day":"07","year":"2020"},"text":{"headline":"News Week 6","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"02","day":"07","year":"2020"},"end_date":{"mon1th":"02","day":"14","year":"2020"},"text":{"headline":"News Week 7","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Se confirma el segundo caso en un turista británico en Palma de Mallorca, Islas Baleares, que se contagió de la enfermedad tras entrar en contacto con un individuo de Francia que posteriormente dio positivo.[5] Se trata de un ciudadano británico que fue ingresado, junto a otros tres, dos días antes en el hospital de Son Espases. Al parecer se infectó en un viaje a los Alpes donde estuvo en contacto con un grupo en el que se han diagnosticado cinco casos, todos ellos británicos.[6]</li>
<li class="list-group-item">El Mobile World Congress de Barcelona queda cancelado.[7]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"02","day":"14","year":"2020"},"end_date":{"mon1th":"02","day":"21","year":"2020"},"text":{"headline":"News Week 8","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Se celebra en Milán el partido de fútbol Atalanta de Bergamo - Valencia CF. En ese momento no se sabe pero será uno de los principales factores de la propagación de la pandemia de Italia a España.[8]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"02","day":"21","year":"2020"},"end_date":{"mon1th":"02","day":"28","year":"2020"},"text":{"headline":"News Week 9","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Tras el brote de COVID-19 en Italia, un médico de la región italiana de Lombardía, que se encontraba de vacaciones en Tenerife, da positivo en el Hospital Universitario Nuestra Señora de Candelaria.[9] Posteriormente se confirman más contagios de COVID-19 en la misma isla de personas que habían estado en contacto con este turista, que se alojaban en el mismo hotel que él.[10] El hotel H10 Costa Adeje Palace es puesto en cuarentena.[11]</li>
<li class="list-group-item">En las Islas Canarias, la mujer del médico lombardo de vacaciones en Lombardía da positivo.
En Cataluña, una mujer italiana de 36 años residente en España, que visitó Bérgamo y Milán del 12 al 22 de febrero, da positivo en Barcelona.
Un hombre de 24 años de Madrid, recientemente de vuelta del norte de Italia, da positivo y es ingresado en el Hospital Carlos III.[12] [13]
En la Comunidad Valenciana, un hombre de Villareal, que recientemente había viajado a Milán, da positivo y es ingresado en el Hospital General de Castellón.[14] [15]</li>
<li class="list-group-item">Andalucía reporta su primer caso, en el hospital Virgen del Rocío de Sevilla.[17] Se trata del primer caso de contagio local diagnosticado en España. Responsables del hospital alertan de que este caso muestra que "el virus lleva varios días circulando por España y no lo habíamos detectado". Fuentes de la Junta de Andalucía declaran que “"estamos como Italia el pasado viernes. Los infectados pueden ser cinco, 10 o 100, no lo sabemos”".[16]
En las Islas Canarias, dos turistas italianos que estuvieron de vacaciones junto al doctor italiano y su mujer también dan positivo. El grupo fue trasladado al Hospital Universitario Nuestra Señora de Candelaria y fueron puestos en cuarentena.[18]
En Barcelona, un hombre de 22 años que visitó Italia unos días antes da también positivo.[19]
Otro positivo se confirma en el Hospital Nuestra Señora de Guadalupe, San Sebastián de La Gomera.[20]
Se reporta un segundo caso en Madrid.[21]
El Ministerio de Sanidad anuncia que España ha elevado su nivel de riesgo de "bajo" a "moderado".[17] El presidente de la Sociedad Española de Epidemiología, Pedro Godoy, declara que "no vamos a ver hospitales colapsados con miles de enfermos. El sistema sanitario español está sobradamente preparado para hacer frente a lo que viene”.[16]</li>
<li class="list-group-item">En Cataluña, una mujer de 22 años de Tenerife, que había viajado a Italia del 19 al 25 de febrero, es admitida en el Hospital Clínic.[22]
En Castilla y León, un estudiante italiano de Erasmus en la IE University, Segovia, recién de vuelta de Milán, es admitido en el Hospital General de Segovia,[23] [24] y un ingeniero iraní, trabajador de Valladolid.[25]
En la Comunidad Valenciana, un hombre de 44 años de Valencia, corresponsal de deportes que había viajado al estadio San Siro de Milán el 19 de febrero para retransmitir el partido de fútbol masculino internacional entre el Atalanta B.C. y el Valencia CF, da positivo y es admitido en el Hospital Clínico Universitario de València. Dos personas más con las que tuvo contacto dan también positivo y son admitidos en el mismo hospital. Dos personas más, que se habían desplazado a presenciar el mismo partido en Milán, son hospitalizadas en el mismo sitio.[26] [27] [28] [29] Una mujer que había estado de visita en Milán es hospitalizada en el Hospital de Sagunto, Valencia.[29] Un estudiante italiano estudiando en Valencia, que había estado de visita por el norte de Italia, es admitido en el Hospital Universitario Doctor Peset.[29]
En Madrid se inaugura con normalidad la feria de arte contemporáneo ARCO . Meses después se sabrá que provocó una de las principales entradas del virus en España.[8]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"02","day":"28","year":"2020"},"end_date":{"mon1th":"02","day":"29","year":"2020"},"text":{"headline":"News Week 10","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">En Andalucía, un hombre de 28 años residente en Milán da positivo en Almería, y es admitido en el Hospital Mediterráneo.[30] Más pacientes dan positivo, dos hombres de 42 y 53 años y una mujer de 81 años en Marbella, una enfermera de 25 años de Arjonilla que había tratado a un paciente positivo en coronavirus en el Hospital de Torrejón de Ardoz, un doctor sevillano de 58 años y una señora de 55 años en Fuengirola.[31] [32]
La Comunidad de Madrid confirma su quinto caso positivo de coronavirus en el Hospital Universitario Infanta Sofía en la ciudad de San Sebastián de los Reyes, un hombre de 66 años.[33]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"03","day":"01","year":"2020"},"end_date":{"mon1th":"03","day":"07","year":"2020"},"text":{"headline":"News Week 11","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">En Andalucía dos doctores infectados aumentan el número de casos a 12.[43]
En el País Vasco se reportan otros cuatro casos, tres derivados de contacto con previos positivos en la provincia de Álava, mientras que el caso de Guipúzcoa es un profesional sanitario sin historial de riesgo.[44]
Castilla-La Mancha confirma el primer caso de coronavirus, un hombre de 62 años en la provincia de Guadalajara.[45]
Castilla y León confirma un nuevo caso, un camionero de 62 años que había viajado a Milán dos semanas atrás y fue admitido en el Hospital de El Bierzo.[46]
Extremadura notifica sus primeros cuatro casos: un hombre de 56 años en Coria, otro de 56 años en Cáceres y dos hombres de 58 y 19 años en Llerena-Zafra.[47]</li>
<li class="list-group-item">En el País Vasco otro caso de personal sanitario infectado es anunciado en la provincia de Álava.[48]
En Cantabria se registran nueve nuevos casos de personas que habían viajado a Italia.[49]
En Castilla-La Mancha dos hombres de 30 y 23 años, ambos casos importados, con enlace epidemiológico con la zona de riesgo del norte de Italia, tratados en los hospitales de Almansa y Albacete.[50]
En Castilla y León, cinco nuevos casos en un día aumentan a ocho los afectados por coronavirus en la región.[51] Tres en León —incluyendo a un policía leonés que había estado tomando declaración a dos ciudadanos coreanos con tos activa[52] —, un estudiante de 19 años en la Universidad de Salamanca[53] , y un hombre de 52 años de La Rioja en la provincia de Burgos.[54]
Extremadura anuncia dos nuevos positivos, dos chicas de 20 y 21 años en Badajoz.[55]
Segundo caso en Navarra, un hombre de 34 años familiar de la mujer ingresada.[56]
La Rioja anuncia su primer caso en la región.[57]</li>
<li class="list-group-item">Tanto Asturias como las Islas Baleares alcanzan los tres casos confirmados.[58] [59] [60]
La Comunidad de Madrid alcanza los 56 casos, con 5 en cuidados intensivos.[61]
La Rioja confirma un segundo caso, un hombre que había tenido contacto con personal sanitario del Hospital Txagorritxu (Vitoria-Gasteiz, Álava).[62]
En la Comunidad Valenciana, tras una investigación forense y una necropsia se confirma que un hombre fallecido el 13 de febrero en Valencia estaba infectado con coronavirus.[63] . El hombre había realizado un viaje a Nepal y había sido diagnosticado con una neumonía grave de origen desconocido y, pese a que el médico que le atendió solicitó hacer la prueba del coronavirus, la Generalidad Valenciana rechazó la petición por no estar dentro de los criterios definidos por el Ministerio de Sanidad en ese momento[1] Dos semanas después, una necropsia determina que el paciente estaba afectado por el COVID-19.[64] (hasta el 25 de febrero no hubiese cumplido los criterios para hacerle la prueba). Se trata de la primera víctima mortal confirmada en Europa por la pandemia, según los datos disponibles hasta ese momento.</li>
<li class="list-group-item">Aragón confirma su primer caso en un hombre de 79 años.[65]
Las Islas Baleares confirman su primer caso recuperado.[66]
En el País Vasco se confirman otros 8 positivos, con un total de 16 casos activos en Álava, dos en Guipúzcoa y tres más infectados y un muerto en Vizcaya. 250 personas permanecen en aislamiento, de los cuales más de cienc son profesionales sanitarios.[67] [68]
Castilla-La Mancha confirma un aumento a un total de 12 casos:, 7 en Guadalajara, 2 en Toledo, 1 en Albacete, 1 en Almansa y 1 en Tomelloso.[69]
Galicia confirma su primer caso en la provincia de La Coruña.[70]
El total en la Comunidad de Madrid alcanza los 76 infectados, con 41 hospitalizados y 7 en cuidados intensivos.[71]
Fallece un anciano de 82 años con enfermedades crónicas y neumonía en Vizcaya, convirtiéndose en el segundo caso mortal.[72]</li>
<li class="list-group-item">Segundo caso confirmado en Aragón, un hombre de 87 años ingresado en el hospital de Nuestra Señora de Gracia Hospital en Zaragoza, que falleció unas horas más tarde.[92] [93] Otros 8 casos fueron notificados, aumentando el total a 9 casos activos y 1 fallecido.[94]
En las Islas Baleares, se da un nuevo positivo, un hombre admitido en el hospital de Can Misses, aumentado el número de casos activos a 6 y un recuperado.[95]
En el País Vasco se notifican 18 nuevos positivos, 13 de ellos en Álava y 5 en Vizcaya, aumentando el total de positivos a 45.[96]
En las Islas Canarias se reporta un nuevo caso, un hombre en San Cristóbal de la Laguna, Tenerife,[97] otras tres turistas italianas y otra persona en Tenerife dan positivo, aumentando el total a 13 casos activos y 3 recuperaciones, 9 de ellas en Tenerife y 4 en Gran Canaria.[98] [99]
En Cantabria se detecta un nuevo caso, una "persona joven" infectada en el País Vasco, dando un total de 11 casos en la comunidad.[100]
En Galicia se dan el tercer y cuarto positivo de la comunidad, una niña de 15 años y una mujer de 47, en Vigo.[101] [102]
46 positivos nuevos en la Comunidad de Madrid en Valdemoro aumentan los casos a 134 activos y 4 muertes,[103] incluyendo a un hombre de 76 años con patologías previas que murió en el hospital Infanta Elena de Valdemoro, convirtiéndose en la cuarta muerte confirmada en España[104] [105] otro hombre de 91 años fallece en el hospital Gregorio Marañón[106] y otro hombre de 83 años fallece en el Hospital Severo Ochoa de Leganés.[107]
21 nuevos positivos en La Rioja aumentan el total a 38.[108] [109]
La Conferencia Episcopal transmite la orden de que las iglesias deben eliminar el agua bendita de las pilas, evitar la tradición de darse la paz, y no besar las imágenes religiosas.[110]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"03","day":"07","year":"2020"},"end_date":{"mon1th":"03","day":"14","year":"2020"},"text":{"headline":"News Week 12","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Un estudiante del Colegio Santa María de los Rosales en Madrid da positivo por coronavirus. Este colegio es donde estudian Leonor, Princesa de Asturias, heredera del trono de España y su hermana la Infanta Sofía.[111] .[112] La Casa Real anuncia que las hijas del Rey seguirían acudiendo a clase. El alumno contagiado cursa Segundo de Bachillerato, está en el Pabellón de Mayores. Se ha producido una reunión con la Consejería de Sanidad de la Comunidad de Madrid y se ha decidido que el colegio debe seguir funcionando con normalidad y tranquilidad.[111]
Fallecen dos ancianos en una residencia, subiendo a 8 muertos por este virus en España.[113]
3 nuevos casos confirmados, esta vez en Aragón, sumando un total de 14 casos de este virus en Aragón.[114] Dos de estos casos, son ancianos de la residencia en la que se ha extendido la infección en las últimas horas, y el otro es un caso no relacionado con los contagios conocidos en Zaragoza hasta la fecha.[115]
Nuevo caso en Málaga, la Consejería de Salud y Familias de la Junta de Andalucía ha informado en un comunicado que se ha confirmado un nuevo caso de coronavirus. En concreto, se trata de una mujer de la provincia de Málaga de 71 años que ha tenido contacto con uno de los casos positivos.[116]
Hacia las 19:00 se confirman más de 450 casos de infectados.[117]
A preguntas de los periodistas sobre el riesgo elevado de contagios en las manifestaciones del 8M, el director del Centro de Coordinación de Alertas y Emergencias Sanitarias, Fernando Simón, en la rueda de prensa diaria que ofrece en nombre del Gobierno, resta importancia al riesgo de contagio en ellas, asegurando que él no recomendaba «a nadie nada» en lo relativo a las manifestaciones, afirmando que «si mi hijo me pregunta si puede ir le diré que haga lo que quiera». Justifica su minimización del riesgo en que «es una convocatoria para nacionales en la que en principio participan nacionales pero no quiere decir que no haya extranjeros ni tampoco algunos de alguna zona de riesgo pero no es una afluencia masiva de personas de zonas de riesgo»[118] .</li>
<li class="list-group-item">Mediodía: 589 contagiados y 13 muertos. Horas más tarde se notifica, que se elevó a 617 infectados y 17 decesos.[91]
Se confirman 7 nuevas muertes por la enfermedad.[119]
La Región de Murcia confirma su primer positivo, tras haber sido la última Comunidad Autónoma en permanecer sin casos reportados.[120]</li>
<li class="list-group-item">Mediodía: 911 contagiados y 25 muertos.[91] Las personas afectadas por el nuevo coronavirus en La Rioja se han elevado ya a 102.[121] Este mismo día los respectivos gobiernos autonómicos suspenden las clases de todos los niveles educativos en la Comunidad de Madrid, Vitoria y Labastida durante 15 días: del miércoles 11 de marzo al miércoles 25 de marzo, ambos inclusive.[122]
El número de casos confirmados aumenta a 1231 y el recuento de muertes a 30.[123]
En Barcelona, una guardería cierra tras el positivo de una trabajadora y tres miembros del Ayuntamiento, incluyendo al Primer Teniente de alcalde, Jaume Collboni, se ponen en cuarentena.[124]
La Consejería de Salud catalana reporta dos nuevas muertes.[125]
El gobierno vasco anuncia el cierre de todas las escuelas en los municipios de Vitoria[126] y Labastida.[127]
La Presidenta del gobierno regional de la Comunidad de Madrid, Isabel Díaz Ayuso, anuncia la cancelación durante dos semanas de las clases en la Comunidad a todos los niveles educativos - desde infantil hasta la universidad - tras el fuerte incremento de casos en la región, una medida que afecta a más de 1,5 millones de estudiantes.[128]</li>
<li class="list-group-item">Mediodía: 1500 contagiados y 35 muertos.[91] Valencia aplaza las Fallas.[129]
Primera muerte confirmada en La Rioja.[130] La Rioja decreta el cierre de sus centros educativos.
El gobierno regional de La Rioja anuncia la suspensión de las clases por un período de dos semanas.[131]
Javier Ortega Smith, Secretario General del partido político Vox, tercera fuerza política en el Congreso de los Diputados, es anunciado como positivo después de que su partido celebrase un encuentro con simpatizantes a nivel nacional el 8 de marzo.[132]
El Congreso de los Diputados y el Senado suspenden su actividad parlamentaria tras el positivo de Ortega Smith por un período de una semana, y los 52 diputados nacionales de Vox son requeridos para quedarse en casa.[133]
Todos los vuelos directos entre aeropuertos españoles e italianos quedan suspendidos hasta el 25 de marzo.[134]
Se confirman los primeros casos en la provincia de Tarragona: dos en Cambrils y otros dos en Salou.[135]
Una señora mayor de Castellserá se convierte en el primer caso de la provincia de Lérida.[136]
El Tribunal Constitucional suspende toda su actividad del día siguiente y el próximo.[137]
La Casa Real informa de que la agenda semanal del Rey queda suspendida, salvo una visita oficial a Francia en el día siguiente.[138]
La Conferencia de Rectores de las Universidades Públicas Madrileñas (CRUMA) decide retrasar el calendario académico, las clases, exámenes y matriculaciones por un periodo de dos semanas.[139]
El Gobierno de España suspende los eventos que congreguen a más de 1000 personas en Madrid, La Rioja y Vitoria.[140]
El Gobierno de Valencia decide posponer las Fallas de Valencia y las fiestas de la Magdalena en Castellón hasta nuevo aviso.[141]
Se prohíbe la asistencia de público a los partidos de fútbol en España durante los siguientes quince días. Ya esa misma noche, el Valencia-Atalanta de Liga de Campeones europea y el Eibar-Real Sociedad de Liga se juegan a puerta cerrada.</li>
<li class="list-group-item">Mediodía: 1978 contagiados y 47 muertos.[91]
La OMS declara la pandemia a nivel mundial por Covid-19[142]
El Gobierno de Cataluña sigue los pasos del Gobierno de España el día anterior y suspende los eventos de más de 1000 personas en toda la región.[143]
Madrid cancela el principal homenaje a las víctimas del 11M en Atocha, aunque se celebran homenajes menores en la sede del gobierno regional y el Parque del Retiro.[144]
Extremadura confirma su primer fallecimiento.[145]
Un segundo diputado nacional de Vox que no tuvo contacto con Ortega Smith es confirmado como positivo en COVID-19.[146]
La Asamblea de Madrid, suspende su actividad política por un periodo de 15 días tras el positivo de Ortega Smith.[147]
El Parlamento de Andalucía suspende su actividad política durante una semana tras el positivo de un diputado regional de Vox por Cádiz.[148]
Ana Pastor, vicepresidenta segunda del Congreso, expresidenta del Congreso y antigua Ministra de Sanidad y de Fomento, anuncia que ha dado positivo en COVID-19.[149]
Ana Vega, portavoz de Vox en las Cortes Valencianas, anuncia que ha dado positivo en COVID-19, convirtiéndose en la cuarta política electa del partido de ultraderecha en estar infectada.[150]
La consejera de Sanidad del País Vasco, Nekane Murga, anuncia el cierre de todos los colegios en la provincia de Álava, después de que 12 estudiantes menores de edad dieran positivo en la enfermedad. La medida afectará a más de 60 000 estudiantes.[151]
El Ministerio de Cultura ordena en Madrid el cierre de todos los centros dependientes del Ministerio, lo que incluye los museos de El Prado, el Reina Sofía, el Thyssen, la Filmoteca Española, el Museo Arqueológico Nacional, el Museo Nacional de Antropología, la Biblioteca Nacional o el Palacio Real, entre otros.[152]
A petición del Gobierno, la UEFA aplaza el Barcelona-Nápoles de la Liga de Campeones europea, previsto para el 18 de marzo, y los partidos Sevilla-Roma y Getafe-Inter de Milán, de la Liga Europa, previstos para el 12 y el 19 de marzo, respectivamente.</li>
<li class="list-group-item">Mediodía: 2671 contagiados y 63 muertos.[91]
La ministra de Igualdad Irene Montero da positivo por COVID-19, convirtiéndose en la mayor autoridad política del país en contraer la enfermedad, y el vicepresidente Pablo Iglesias se pone en cuarentena. Cesan todas las actividades en el Palacio de la Moncloa y las acciones del Gobierno de España se llevan a partir de ese momento telemáticamente.
Por la tarde, el Presidente del Gobierno Pedro Sánchez anuncia un plan de choque para frenar el impacto del coronavirus en la economía y recomienda a las Comunidades Autónomas el cierre de los centros de enseñanza en todo el territorio. Poco después de la aparición del Presidente, el Ibex 35 cae un 15%, la mayor caída de su historia en un solo día y volviendo a niveles de 2012, en plena crisis.
Suspendida indefinidamente la liga de fútbol en primera y segunda división, no jugándose ni siquiera a puerta cerrada.[153]
Varios municipios vascos cierran todas sus instalaciones municipales.[154]
Melilla cierra el paso a los transportistas marroquíes para evitar aglomeraciones en la frontera.[155]
Tras la recomendación del Gobierno, los gobiernos regionales de Murcia, Galicia, Cataluña, País Vasco, Asturias, Aragón, Islas Canarias, Castilla-La Mancha, Navarra, Extremadura, Islas Baleares e Andalucía anuncian la cancelación de las clases en todos los niveles educativos en sus respectivas regiones,[156] [157] [158] [159] [160] [161] [162] [163] [164] haciendo que un total de 13 de las 17 Comunidades Autónomas hayan suspendido las clases.
Los Reyes de España se someten a una evaluación después de que Letizia hubiera estado en contacto con Irene Montero el día 6 de marzo.[165]
La alcaldesa de Barcelona, Ada Colau, anuncia que se encuentra en cuarentena preventiva.[166]
Las Cortes Generales suspenden su actividad durante 15 días tras varios positivos más entre los trabajadores.[167]
Marruecos suspende el tráfico aéreo y marítimo con España.[168]
El Ministerio del Interior decide aislar los 69 centros penitenciarios que dependen de su supervisión.[169]
La senadora del PP Carmen Leyte da positivo en COVID-19.[170]
La Sagrada Familia y la Alhambra cierran.[171]
El gobierno catalán ordena el confinamiento de la ciudad de Igualada y las ciudades de Vilanova del Camí, Òdena y Santa Margarida de Montbui después de que el Hospital de Igualada se convirtiera en un foco de contagio, afectando esta medida a 70 000 personas durante 14 días y convirtiéndose en la primera medida de este tipo en España.[172]
Cancelación de clases a nivel nacional después de que todas las Comunidades Autónomas lo decretaran en sus respectivos territorios. 9,5 millones de estudiantes son mandados a quedarse en sus casas por un periodo de dos semanas.[173]
El líder de Vox Santiago Abascal y la portavoz del partido en el Congreso, Macarena Olona, confirman que han dado positivo en COVID-19 después de haber compartido espacio con Javier Ortega Smith en el mitin del día 8 de marzo.[174]
La Ministra de Política Territorial y Función Pública, Carolina Darias, da positivo en las pruebas después de que todo el Consejo de Ministros tuviera que someterse a ellas tras el positivo de la Ministra de Igualdad, convirtiéndose en el segundo miembro del Ejecutivo español en estar contagiado.[175]
Primeros dos casos registrados en la isla de La Palma.[176]</li>
<li class="list-group-item">Mediodía: 3869 contagiados y 90 muertos.[91]
Primeros dos casos registrados en Melilla.[177]
El País Vasco aprueba el estado de emergencia sanitaria, lo que faculta a la autonomía para decretar el confinamiento de localidades.[178]
La Comunidad de Madrid decreta el cierre de todo el sector de la hostelería a partir del siguiente día.[179]
El Presidente del Gobierno Pedro Sánchez anuncia que entrará en vigor el estado de alarma en todo el territorio español a partir del día 14 de marzo, medida que se extenderá al menos los siguientes 15 días.[180]
Aragón alcanza los 80 casos y suma un nuevo fallecido con coronavirus. Primer caso en la provincia de Huesca.[181]
Sanidad confirma 11 casos positivos por coronavirus en la provincia de Cuenca.[182]
Primer positivo en Palencia[183] y en Soria.[184]
Javier Solana, antiguo Secretario General de la OTAN, Ministro de Exteriores de la Unión Europea, Secretario General del Consejo de la Unión Europea y exministro, es ingresado por coronavirus. [185]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"03","day":"14","year":"2020"},"end_date":{"mon1th":"03","day":"21","year":"2020"},"text":{"headline":"News Week 13","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 5232 contagiados y 133 muertos.[91]
Se suspenden las procesiones de Semana Santa en Sevilla, después de la decisión del Ayuntamiento de Sevilla,[186] , así como en Córdoba, Jaén y otras muchas ciudades.
Primer caso en Algeciras.[187]
La Junta de Andalucía decreta el cierre de todos los negocios no indispensables, los del sector de la hostelería, plazas y parques públicos así como playas a partir del siguiente día.[188]
Se inicia un movimiento ciudadano en el que a las 22 horas los españoles aplauden desde sus ventanas y balcones como muestra de apoyo a profesionales de servicios básicos y especialmente al personal sanitario. Este movimiento se reproducirá durante los siguientes días a las 20 horas, organizado en un principio a través de las redes sociales con el hashtag #AplausosSanitarios.[189]
El Gobierno de España decreta el estado de alarma, limitando la libertad de circulación ciudadana a determinados supuestos y decretando el cierre de la mayoría de comercios y la totalidad de los lugares de ocio, educativos y culturales.[190] [191] Se inicia la cuarentena en todo el país.
Tras la rueda de prensa en relación a este decreto, se informó que la esposa del presidente del Gobierno, Begoña Gómez, que también había participado en la Manifestación del 8M, dio positivo en la prueba del Coronavirus.[192]</li>
<li class="list-group-item">El Gobierno de España decreta el estado de alarma, limitando la libertad de circulación ciudadana a determinados supuestos y decretando el cierre de la mayoría de comercios y la totalidad de los lugares de ocio, educativos y culturales.[190] [191] Se inicia la cuarentena en todo el país.</li>
<li class="list-group-item">Mediodía: 7 753 contagiados, 288 muertos.[193]
Primer caso en la Ciudad Autónoma de Ceuta, un estudiante procedente de Madrid.[194]
2.000 casos nuevos confirmados por el Ministerio de Sanidad.
La Feria de Abril de Sevilla se pospone a septiembre por primera vez en su historia.[195]
El Sindíc catalán Rafael Ribó y el Vicepresidente de Cataluña Pere Aragonès dan positivo en la enfermedad.[196] [197]
El Valencia CF anuncia cinco casos de coronavirus: los futbolistas Ezequiel Garay, Eliaquim Mangala y José Luis Gayà, así como un miembro del equipo técnico y un médico.[198]
En respuesta al incremento del número de casos en la pandemia de coronavirus, el gobierno de España declara oficialmente el Estado de Alarma y anuncia la imposición de una cuarentena nacional a partir del 15 de marzo como parte de las medidas de emergencia para combatir a la enfermedad en el país.[199] [200] . Todos los ciudadanos son ordenados a quedarse en sus residencias habituales salvo para comprar comida y medicinas, trabajar o atender a urgencias.[201] [202] Las restricciones también ordenan el cierre temporal de todas las tiendas y empresas no esenciales, incluyendo bares, cafeterías, cafés, cines o centros comerciales[199] , así como permitir al gobierno central y a los autonómicos disponer tanto de la sanidad pública como privada para llevar a cabo unas medidas más efectivas en el control de la enfermedad.[203] El Presidente del Gobierno, Pedro Sánchez, argumenta que esta "decisión extraordinaria" es necesaria para combatir una "crisis sanitaria, económica y social".[199] Los Ministros de Sanidad, Salvador Illa; Defensa, Margarita Robles; Interior, Fernando Grande-Marlaska; y Transporte, José Luis Ábalos, quedan al frente de la crisis.</li>
<li class="list-group-item">Mediodía: 9407 contagiados, 335 muertos y 530 recuperados.[91]</li>
<li class="list-group-item">Isabel Díaz Ayuso, Presidenta de la Comunidad de Madrid, la región más afectada por la enfermedad, se convierte en la primera dirigente autonómica en dar positivo en COVID-19. [204]
Quim Torra, Presidente de la Generalidad de Cataluña, la segunda región más afectada, confirma que también ha dado positivo en COVID-19.[205]
Iñigo Urkullu y Alberto Núñez Feijóo, Presidentes del País Vasco y Galicia, anuncian el aplazamiento de las elecciones regionales en ambos territorios, previstas para el 5 de abril. [206]
El Ministro del Interior Grande-Marlaska anuncia el cierre de las fronteras españolas a partir de las 00:00 del 16 de marzo, solamente permitiendo la entrada de ciudadanos españoles y aquellos que argumenten causa de fuerza mayor o situación de necesidad. Las restricciones no tendrán efecto sobre el transporte de mercancías para así garantizar la cadena de suministro, así como tampoco afecta al personal diplomático.[207]</li>
<li class="list-group-item">Mediodía: 11.279 contagiados, 499 muertos y 1.028 recuperados.[91]</li>
<li class="list-group-item">El gobierno cierra las conexiones marítimas y aéreas de pasajeros de la península con Ceuta y Melilla, con la excepción de los conductores que trasporten mercancías y algún supuesto médico autorizado por delegación del gobierno.[208]
Motín en el CIE de Aluche por su supuesta exposición al coronavirus.[209]</li>
<li class="list-group-item">Mediodía: 13.910 contagiados, 623 muertos y 1.081 recuperados.[91]
La Policía Nacional y la Guardia Civil anuncian que en los primeros días del estado de alarma, los respectivos cuerpos han llevado a cabo un total de 88 detenciones por desobediencia. Igualmente, anuncian la incautación de diferentes equipos de protección individual, entre los que destacan 68.913 mascarillas.[210]
Primer fallecimiento entre las Fuerzas y Cuerpos de Seguridad del Estado, un Guardia Civil de 37 años sin patologías previas.[211]
Discurso del rey Felipe VI a la nación para pedir unidad ante la crisis.[212] En algunas ciudades de España, durante la intervención se produjo una cacerolada con el objetivo de reclamar al rey emérito la donación de los 100 millones de euros que tendría en cuentas suizas.[213]
El Festival de la Canción de Eurovisión 2020 fue cancelado debido a la pandemia mundial del coronavirus, donde el cantante Blas Cantó iba a representar a España en la ciudad de Róterdam, Países Bajos, con la canción "Universo", en mayo. Ese mismo día, RTVE confirmó a Blas Cantó como representante de España en la próxima edición.[214]</li>
<li class="list-group-item">Mediodía: 17.147 contagiados, 767 muertos y 1.107 recuperados.[215]
Primer fallecimiento entre el personal sanitario: una enfermera de 57 años que trabajaba en el hospital de Galdácano.[216]
El vicepresidente Pablo Iglesias queda al frente de la coordinación de los Servicios Sociales, siendo el responsable de dirigir el reparto de los 600 millones destinados a cubrir las necesidades de los colectivos más vulnerables.[217] Su comparecencia pública junto al resto de responsables de diferentes áreas del gobierno y de la administración, suscitó polémica al saltarse por segunda vez la cuarentena por el positivo de su mujer, la ministra Irene Montero.[218]
La expresidenta de la Comunidad de Madrid Esperanza Aguirre y su marido dieron positivo en la prueba de Covid-19.[219]
Primeras condenas por desobediencia a personas que no respetaron el confinamiento por un Tribunal de Tenerife.[220]
El gobierno restringe el transporte aéreo y marítimo entre la península y Canarias y Baleares, permitiendo un número de vuelos y trayectos marítimos limitados. También se limita el transporte entre islas.[221]
Detectan el primer positivo en la isla de El Hierro, única isla del archipiélago canario que todavía no presentaba ningún caso confirmado.[222]</li>
<li class="list-group-item">Mediodía: 19.980 contagiados, 1.002 muertos y 1.588 recuperados.[91]
Dentro de los casos confirmados, hay 1141 pacientes ingresados en la Unidad de Cuidados Intensivos.[223] Estas unidades se aproximan a su límite de camas en algunas zonas.[224]
El Ministerio del Interior anuncia que ya se han propuesto para sanción a 31 000 personas por circular por las vías públicas sin justificación y se ha detenido a 315 personas por desobediencia al saltarse lo dispuesto en el Real Decreto del Estado de Alarma.[223]
Fallece la primera mujer por violencia de género a manos de su pareja desde que comenzó el estado de alarma.[225]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"03","day":"21","year":"2020"},"end_date":{"mon1th":"03","day":"28","year":"2020"},"text":{"headline":"News Week 14","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 24.926 contagiados, 1.326 muertos y 2.125 recuperados.[91]
Comparecencia de Pedro Sánchez en la que anunció que no tomaría medidas más restrictivas a pesar de que lo peor estaría por llegar.[226] Simultáneamente se produjo una cacerolada en varias localidades de España, con especial seguimiento en Madrid contra la gestión del Gobierno.[227]
En Madrid se instala el hospital de campaña de Ifema, un hospital que albergará 5.500 camas.[228]
Muere por COVID-19 el empresario presidente del Real Madrid Club de Fútbol Lorenzo Sanz.[229]</li>
<li class="list-group-item">Mediodía: 28.603 contagiados, 1.724 muertos y 2.575 recuperados.[91]
El Presidente del Gobierno anuncia su intención de solicitar autorización al Congreso de los Diputados para aprobar una prórroga de otros quince días del estado de alarma.[230] También anunció que su suegro y su madre dieron positivo en la prueba del virus.[231]
Se inicia la hospitalización de pacientes de COVID-19 en el Hospital de IFEMA en Madrid, un hospital de campaña instalado en IFEMA.[232]
La Región de Murcia solicita al Gobierno central poder restringir todavía más los movimientos en su territorio autonómico, algo que ha sido denegado por la administración estatal.[233]</li>
<li class="list-group-item">Mediodía: 33.089 contagiados, 2.184 muertos y 3.355 recuperados.[91]
Comienza el reparto de los 640 mil nuevos test rápidos de diagnóstico adquiridos por el Gobierno. Este reparto se inicia primero para profesionales sanitarios y residencias de ancianos.[234]
El Presidente del Gobierno se puso en cuarentena debido al contagio de sus familiares.[235]
La vicepresidenta del Gobierno, Carmen Calvo, fue hospitalizada por un problema respiratorio.[236]
Muere el exfutbolista Benito Joanet por coronavirus y Fernando Martín, expresidente del Real Madrid, se encuentra en estado grave.[237] [238]
El sindicato Free Riders denunció a la empresa Glovo a la Inspección de Trabajo de la Generalitat debido a la falta de medidas de protección frente al virus.[239]</li>
<li class="list-group-item">Mediodía: 39.673 contagiados, 2.696 muertos y 3.794 recuperados.[91]
El Ministerio del Interior informa de la detención de 926 personas y la realización de 102 000 denuncias a infractores del decreto del estado de alarma.[240]
María Dolores de Cospedal, exsecretaria general del PP, y Paco Sanz, hijo del difunto Lorenzo Sanz, dieron positivo por coronavirus.[241] [242] Los resultados de Carmen Calvo fueron negativos no concluyentes.[243]
La localidad leonesa de Valle de la Vaduerna fue aislada debido a un contagio masivo.[244]
Se suspende el desfile de Orgullo gay de Madrid hasta nueva orden.[245]
El Gobierno español pide ayuda a la OTAN respecto al coronavirus.[246]
El Palacio de Hielo de Madrid comienza a ser usado como morgue para personas fallecidas por coronavirus.[247]
El Orgullo LGBT de Madrid, el mayor evento LGBT de Europa y el segundo del mundo, planeado para el mes de julio, es aplazado por el coronavirus. [248]</li>
<li class="list-group-item">Mediodía: 42.058 contagiados, 2.994 muertos y 3.794 recuperados.[91]
El consejero de Trabajo del Gobierno catalán Chakir el Homrani y la Vicepresidenta del Gobierno Carmen Calvo dieron positivo por coronavirus.[249] [250]
El Gobierno y las Comunidades Autónomas aplazan los exámenes de la EVAU hasta julio.[251]
Según el Ministerio del Interior, unas 1.057 personas han sido detenidas en toda España por incumplir la cuarentena.[252] La Seguridad Social ha registrado más de 130.000 bajas laborales.[253]</li>
<li class="list-group-item">Mediodía: 56.188 contagiados, 4.089 muertos y 7.015 recuperados.[91]
El Congreso autoriza a ampliar el estado de alarma.[254]
La Bolsa española abre con pérdidas del 2,28 % y ha perdido los 6.800 puntos.[255] S&P Global estima que el PIB español se contraiga un 2,1% este año.[256]
Los sindicatos UGT y CCOO piden frenar prohibir los posibles despidos tras la crisis del coronavirus.[257] [258]</li>
<li class="list-group-item">Mediodía: 64.059 contagiados, 5.178 muertos y 9.357 recuperados.[91]
María Teresa Borbón, prima del Rey Felipe VI, y la fiscal antidroga Cristina Toro Ariza fallecieron por coronavirus.[259] [260]
Fallece en Logroño el Teniente Coronel Jesús Gayoso Rey de la Guardia Civil, jefe del Grupo de Acción Rápida, unidad de élite del instituto armado. Considerado como el número 2 de la Guardia Civil, es la cuarta víctima mortal dentro del cuerpo.[261] A las 20 horas del día de su muerte, se realizó un sentido homenaje por miembros del Cuerpo Nacional de Policía y de la Policía Local en el cuartel donde estaba destinado.[262]
Se ha abierto diligencias contra José Manuel Franco por permitir la celebración de actos multitudinarios como 8-M pese a las advertencias del ECDC por el virus.[263]
La Ciudad de la Justicia de Madrid comienza a ser usado como segunda morgue para personas fallecidas por coronavirus.[264]
El Gobierno prohíbe los despidos asociados a la alarma decretada.[265] Los empresarios de CEOE y Cepyme advierten al Gobierno que tal decisión entorpecerá la recuperación económica.[266]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"03","day":"28","year":"2020"},"end_date":{"mon1th":"03","day":"31","year":"2020"},"text":{"headline":"News Week 15","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 78.987 contagiados, 6.528 muertos y 14.709 recuperados.[91]
Muere el alcalde de Cantalojas, Narciso Arranz. por coronavirus.[267] El tenor Plácido Domingo es hospitalizado por COVID-19.[268]
Se convocaron aplausos de España a las 18.00 por todos los niños.[269]
El Gobierno paraliza todas las actividades no esenciales desde el 30 de marzo al 9 de abril.[270]</li>
<li class="list-group-item">Noche: 80.110 contagiados, 6.803 muertos y 14.709 recuperados.[91]
Pedro Sánchez paralizada toda actividad no esencial en España hasta el 9 de abril.[271]
Se instala un hospital de campaña en el hospital Gregorio Marañón de Madrid.[272]
El número de muertos y de infectados desciende en Madrid.[273]
Muere el doblador Salvador Vives por COVID-19.[274]
Primeros dos casos detectados en la isla de Formentera, Islas Baleares, dejando a la isla de La Graciosa como único territorio español sin casos detectados. [275] [276]</li>
<li class="list-group-item">Mediodía: 85.195 contagiados, 7.340 muertos y 16.780 recuperados.[91]
Fernando Simón, director del Centro de Coordinación de Alertas y Emergencias Sanitarias y cara visible de la respuesta gubernamental en sus ruedas de prensa diarias para avanzar del avance de la enfermedad, da positivo en COVID-19[277] [278] , siendo sustituido por María José Sierra.
El exalcalde de Barcelona Xavier Trias es ingresado por coronavirus.[279]
El personal sanitarios denuncia el caos organizativo del hospital campaña de Ifema.[280]
La demanda eléctrica cae un 25% y el tráfico cae un 34% tras el cierre de las actividades.[281] [282]
El barrio de Son Riera en Mallorca es cerrado por el coronavirus.[283]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"04","day":"01","year":"2020"},"end_date":{"mon1th":"04","day":"07","year":"2020"},"text":{"headline":"News Week 16","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 102.136 contagiados, 9.053 muertos y 22.647 recuperados.[91]
Se ha recaudado en donaciones 8,5 millones de euros en la web de la Comunidad de Madrid para sanidad.[285]
Aumenta la violencia hacia menores y el juego de póquer y casinos en línea debido al confinamiento.[286] [287]
Fallece el agente José Luis Gómez, primer policía nacional víctima del coronavirus.[288]
Nica, una mujer de 103 años recibe el alta tras superar el coronavirus.[289]
Se abren dos hospitales de campaña en Leganés y Fuenlabrada.[290]</li>
<li class="list-group-item">Mediodía: 110.238 contagiados, 10.003 muertos y 26.743 recuperados.[91]
Se suspenden la clases presenciales en las universidades de Andalucía en lo que queda del curso.[291]
El Gobierno rechaza la ayuda de Cuba contra el coronavirus mediante el envío de médicos como hizo en Italia o Francia.[292]
El número de pensionistas se redujo en el mes de marzo en 8.377 personas.[293]
Varios diputados y senadores del PSOE apoyan donar 1.000 y 2.000 euros de su sueldos para los afectados de COVID-19.[294] También PP, Cs y EH Bildu han realizado donaciones. [295]</li>
<li class="list-group-item">Mediodía: 117.710 contagiados, 10.935 muertos y 30.513 recuperados.[91]
La Comunidad de Madrid abre su tercera morgue para personas fallecidas por coronavirus en la pista de hielo de Majadahonda.[296]
Se retrasa la EvAU al 6, 7 y 8 de julio en Madrid por la crisis sanitaria.[297]
El Gobierno opta por alargar el estado de alarma hasta el 26 de abril.[298] Unidas Podemos propone al Gobierno en reducir sus sueldos a la mitad para la lucha contra el coronavirus.[299]
Fallece el historietista Juan Giménez por COVID-19.[300] Baltasar Garzón recibe el alta tras superar el coronavirus.[301]</li>
<li class="list-group-item">Mediodía: 124.736 contagiados, 11.744 muertos y 34.219 recuperados,[91] lo que arroja las menores cifras en una semana.[302]
Turquía requisa varios respiradores de España.[303] A consecuencia, Vox pide la retirada del embajador turco y Ciudadanos exige recuperar el cargamento sanitario.[304]
Se cierran 44 vestíbulos y 183 accesos en el metro de Madrid.[305] Interior refuerza el control nocturno de las carreteras.[306]
El Presidente del Gobierno Pedro Sánchez anuncia que pedirá al Congreso una nueva prórroga del Estado de Alarma hasta el día 26 de abril.[307] Se votará tal decisión en el día 9 de abril en Jueves Santo.[308]
La ministra Arancha González Laya asegura haber recuperado los respiradores del bloqueo turco.[309]
Aterriza el primer avión chino con material sanitario comprado por el Gobierno de Madrid en China. El cargamento incluye 1.430.000 mascarillas, 2.200.000 guantes y 72.000 trajes de protección, siendo descargado en el Hospital de IFEMA.[310]
Se han habilitado dos pabellones municipales en Barcelona para dar apoyo al Hospital del Mar y al de Sant Pau.[311]
Muere una mujer de 78 años por su marido en Las Palmas de Gran Canaria, siendo la segunda víctima de violencia de género durante el confinamiento.[312]</li>
<li class="list-group-item">Mediodía: 130.759 contagiados, 12.418 muertos y 38.080 recuperados.[91]
Madrid recibe un segundo avión con 82 toneladas de material sanitario, con dos millones de mascarillas y guantes, 45.000 trajes de protección para los trabajadores y 228 camas hospitalarias.[313] [314]
El presidente de la Junta de Andalucía, Juanma Moreno, criticó como "injusto" el reparto de fondos sel Gobierno central contra el COVID-19.[315]
Pedro Sánchez comunidades un listado de infraestructuras donde aislar a los asintomáticos con coronavirus.[316]
Fallece el primer sanitario por coronavirus en Madrid.[317]</li>
<li class="list-group-item">Tarde: 135.032 contagiados, 13.169 muertos y 40.437 recuperados.[91]
Educación facilita el acceso de equipos y conexiones para la clases en línea, descartando el aprobado general.[318] Madrid hará en los días de 6, 7 y 8 de julio las pruebas de selectividad.[319]
Han fallecido por el diseñador de moda Juanjo Rocafort, el empresario Alfonso Cortina y la madre de Pep Guardiola, Dolors Sala Carrió, por coronavirus.[320] [321] [322]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"04","day":"07","year":"2020"},"end_date":{"mon1th":"04","day":"14","year":"2020"},"text":{"headline":"News Week 17","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 140.510 contagiados, 13.798 muertos y 43.208 recuperados.[91]
La Comunidad de Madrid ha inspeccionado 285 desde el 27 de marzo.[323] Barcelona opta en no cobrar el alquiler de vivienda pública hasta finales de agosto.[324]
El Gobierno moviliza a parados e inmigrantes a recoger en cosechas para paliar la falta de mano de obra en el campo.[325]
Se encuentran 3.734 sanitarios de baja en Madrid debido a aislamiento o contagio por pacientes positivos de COVID-19.[326]
El Govern de Cataluña descarta abrir el hospital montado por la Guardia Civil en Sant Andreu de la Barca.[327]
Es ingresado Francisco Pardo Piqueras, el director general de la Policía Nacional, tras dar positivo por coronavirus.[328]
Albacete decretó prisión provisional a un hombre por quebrantar reiteradamente el confinamiento.[329]
Veinte sanitarios y varios voluntarios del SAMUR de Madrid reforzarán hospitales de Soria y Segovia.[330]
La Embajada de Turquía en España se defiende de las acusaciones de "confiscación" de los respiradores.[331]</li>
<li class="list-group-item">Mediodía: 146.690 contagiados, 14.555 muertos y 48.021 recuperados.[91]
La OMS dice que "la respuesta española ha sido heroica".[332]
Madrid empieza a hacer test rápidos en residencias de mayores.[333] Fiscalía abre una investigación por las muertes en residencias de Sevilla.[334]
La Junta prevé ayudas de 300 euros a 150.000 autónomos.[335]
Se refuerzan los controles policiales para evitar viajes durante Semana Santa.[336]
Trabajadores del SUMMA 112 denuncian ante la Justicia a la Comunidad de Madrid por falta de protección ante el virus.[337]
Muere un guardia civil de Tráfico en Antequera por coronavirus.[338]</li>
<li class="list-group-item">Mediodía: 152.446 contagiados, 15.238 muertos y 52.165 recuperados.[91]
El Congreso aprueba la segunda prórroga del estado de alarma.[339]
Se presentan 146 propuestas de resolución por los grupos de los Socialistas ha presentado 20; el Popular, 25; Podemos, 25; Izquierda Unida, 25; Foro, 26; y Ciudadanos, 25. Se rechazaron treinta, entre las que se encuentran: la eliminación del impuesto de Sucesiones, la de reestructuración del Sector Público, la de apoyo a familias numerosas y la que pide medidas sobre demografía.[340]
Se aprueba un Ingreso Mínimo Vital extraordinario por el COVID-19. Sindicatos y ONG apoyan al Gobierno. Empresarios acusan al Gobierno de manipular con la renta mínima vital y anuncian no acudir a la reunión del viernes en el Ministerio de Trabajo.[341] [342] [343]
El Gobierno facilita la fabricación de mascarillas y Cataluña compra 14 millones, mientras pide a la población usarlas.[344] [345]
Hacienda plantea aplazar impuestos a pymes y autónomos.[346]</li>
<li class="list-group-item">Mediodía: 157.022 contagiados, 15.843 muertos y 55.668 recuperados.[91]
Hacienda aplaza el pago de impuestos al 20 de mayo a pymes y autónomos.[347]
Fallece Esteban Peñarrubia, el tercer sanitario en Madrid por coronavirus en el hospital Severo Ochoa.[348]
El presidente del Gobierno, Pedro Sánchez, preside el Consejo de Ministros extraordinario y el Comité de Gestión Técnica del Covid-19 en el Palacio de la Moncloa para aprobar la prórroga del estado de alarma y analizar los datos de la pandemia. Frente a PP y Vox, Ciudadanos da su apoyo a Sánchez.[349] [350]</li>
<li class="list-group-item">Mediodía: 161.852 contagiados, 16.353 muertos y 59.109 recuperados.[91]
El Ministerio de Sanidad envía más de 112.00 test rápidos a Andalucía y defiende la vuelta al trabajo de sectores no esenciales para el lunes. También aconseja quedarse en casa ante el menor síntoma.[351] [352]
El Gobierno prorroga la suspensión de los viajes del Imserso hasta el 30 de junio por el coronavirus.[353] Vox acusa al Gobierno de ocultar las cifras reales de fallecidos.[354]
Se cierra el hospital de campaña de Leganés. La Generalitat levantará un hospital de campaña en la cárcel de Quatre Camins en Barcelona.[355] [356]
El Gobierno catalán se plantea en empezar un desconfinamiento progresivo a finales de abril.[357]
El Ejército realizará labores de desinfección y patrullas de presencia en Menorca el próximo lunes.[358]
Las empresas turísticas españolas registran pérdidas de 18.000 millones de ingresos en Semana Santa por la crisis del coronavirus.[359]</li>
<li class="list-group-item">Mediodía: 166.019 contagiados, 16.972 muertos y 62.391 recuperados.[91]
Mueren el primer trabajador del transporte sanitario y el historiador Carlos Seco Serrano por COVID-19.[360] [361] El Colegio de Madrid afirma que 29 médicos murieron en España por COVID-19.[362]
El presidente del Gobierno, Pedro Sánchez, afirma poner en marcha cuanto antes el ingreso mínimo vital y empezar el desconfinamiento progresivo dentro de dos semanas, aunque no descarta mantener la cuarentena si España se recupera.[363] [364] [365]
Se tramitan más de 80.000 ERTE diarios por las oficinas del Servicio Público de Empleo Estatal.[366]</li>
<li class="list-group-item">Mediodía: 169.496 contagiados, 17.489 muertos y 64.727 recuperados.[91]
La presidenta de la Comunidad de Madrid, Isabel Díaz Ayuso, reconoce que debería haber actuado antes frente al coronavirus.[367]
Los recortes con motivo del coronavirus llegan a la empresa pública Paradores, presidida por Óscar López, que reducirá el sueldo de sus más de 4.000 trabajadores.[368]
La consejería de Vivienda reduce el alquiler a inquilinos afectados por la crisis sanitaria.[369]
La Diputación de Valladolid destituye a la directora de sus dos residencias tras destaparse un contagio masivo.[370]
Fallece una mujer en Valladolid al precipitarse por la ventana de su domicilio. Su marido se fue detenido y puesto en libertad tras concluirse que intentó evitar que la mujer se arrojara.[371]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"04","day":"14","year":"2020"},"end_date":{"mon1th":"04","day":"21","year":"2020"},"text":{"headline":"News Week 18","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 172.655 contagiados, 18.056 muertos y 67.504 recuperados.[91]
La presidenta de Madrid, Isabel Díaz Ayuso, cierra la morgue del Palacio de Hielo en Majadahonda.[372]
El BOE decretó que las clínicas privadas que realizan test de COVID-19 tendrán que prestar sus servicios en el Sistema Nacional de Salud y en el que Gobierno puede regular los precios de dichas pruebas para evitar situaciones abusivas.[373]
Hacienda aprueba una moratoria de impuestos a 3,4 millones de autónomos y pymes hasta el 20 de mayo.[374] El FMI prevé que el PIB de España caiga un 8%, siendo superior a la crisis de 2008.[375]
El Rey Felipe VI se reunirá el próximo jueves con los ministros de Universidades y Trabajo para analizar la crisis del sanitaria.[376] El presidente Pedro Sánchez comparecerá el miércoles en el Congreso para prorrogar por tercera vez el estado de alarma.[377] El vicepresidente Pablo Iglesias ha pedido disculpas por vez haber “cometido errores” en la crisis del coronavirus.[378]
Aterriza un cuarto avión con 79 toneladas de material sanitario en Madrid.[379] La Comunidad de Madrid denuncia al Gobierno de haber aportado 10% del material sanitario y que "vetó" las compras de las comunidades.[380]
Interior investiga al expresidente del Gobierno Mariano Rajoy de haberse saltado el confinamiento tras publicarse imágenes en las que se ve con ropa deportiva en las calles de Madrid.[381] La Generalitat también es investigada por rechazar el hospital de campaña montado por la Guardia Civil.[382]
Se abre un hospital de campaña en las instalaciones de Fira de Barcelona en L'Hospitalet de Llobregat para pacientes leves.[383]
El vicepresidente aragonés Arturo Aliaga es ingresado tras dar positivo en COVID-19.[384]
Fallece Manuel Sánchez Lizana, empleado de La Moncloa por coronavirus.[385] El consejero madrileño de Sanidad, Enrique Ruiz Escudero, ha informado este martes de que 5.984 sanitarios infectados por COVID-19 en Madrid, con cinco fallecidos.[386]</li>
<li class="list-group-item">Mediodía: 177.633 contagiados, 18.579 muertos y 70.853 recuperados.[91]
Autores de un estudio publicado por la Fundación de Estudios de Economía Aplicada señalan que un adelanto al confinamiento habría reducido en más de un 60% los casos de infectados.[387]
El Ibex se desploma un 3,8% y pierde los 7.000 puntos. El FMI previene que la economía de la eurozona se contraerá un 7,5%, una recesión mayor de la economía desde la Guerra Civil y una subida del paro del 20%.[388]
Al menos 3.600 personas han muerto en residencias de mayores durante la crisis del coronavirus.[389]
El presidente Pedro Sánchez y vicepresidente Pablo Iglesias han pactado por lanzar el Ingreso Mínimo Vital para combatir la pobreza ya el próximo mes de mayo.[390] El presidente se reunirá con el líder del PP, Pablo Casado, la próxima semana.[391]
Netflix dona un millón de euros para socorrer al cine y la televisión.[392]
El Gobierno acuerda un aprobado general autonómico a todos los alumnos de infantil, primaria, secundaria y primero de bachillerato. También se acuerda abrir los colegios en verano para dar clases voluntarias de refuerzo.[393] [394]</li>
<li class="list-group-item">Mediodía: 182.816 contagiados, 19.130 muertos y 74.797 recuperados.[91]
Según una encuesta del Instituto Nacional de Estadística (INE) el 75% de las empresas cree que la evolución de su negocio será desfavorable.[395]
Las comunidades de Andalucía, Murcia y Madrid no seguirán el acuerdo de cerrar el curso escolar de forma generalizada.[396] La Consejería de Educación es la del regreso de los matriculados en 2º de Bachillerato, FP y 4º de la ESO.[397]
Fallece un hombre infectado de una residencia de Alcobendas (Madrid) tras precipitarse por una ventana del centro.[398] También murieron por COVID-19 el conductor de ambulancias Antonio del Villar y el expresidente de Aragón Santiago Lanzuela.[399] [400]
Israel retiene una treintena de respiradores destinados a España. La ministra de Exteriores, Arancha González Laya, reclama al ministro de Exteriores israelí el desbloqueo de los equipos debido a que adquisición fue anterior a la exclusión de exportación de material crítico para atender a los enfermos más graves de coronavirus.[401]
Se publica el listado de sanitarios fallecidos por coronavirus en España.[402]</li>
<li class="list-group-item">Mediodía: 188.068 contagiados, 19.478 muertos y 72.963 recuperados.[91]
El Gobierno pide a las comunidades el recuento de positivos probables y muertos para preparar la desescalada los cambios introducidos en el modo de contabilizar las cifras de contagiados y admite que no controla los datos tras 34 días del estado de alarma. El Govern cuenta a los fallecidos en residencias y domicilios dentro de las muertes por coronavirus.[403] [404] [405] [406] Pablo Casado, ha exigido la comparecencia del ministro de Justicia, Juan Carlos Campo, para que informe del número real de decesos.[407]
Se realiza exitosamente la primera intervención quirúrgica en el hospital IFEMA a manos del otorrino y diputado del PP, Eduardo Raboso. También se cierra uno de los pabellones del hospital ante la bajada de la presión asistencial.[408] [409]
Fallecen los funcionarios Juan Pedro Pérez de Miguel y Ángel F.M y el director médico Emilio Úcar Corral del Hospital Santa Cristina por COVID-19.[410] [411] [412]</li>
<li class="list-group-item">Mediodía: 191.726 contagiados, 20.043 muertos y 74.662 recuperados.[91]
La Generalidad de Cataluña interviene en las residencias de Premià y Ullastrell en la que han perdido la vida 24 y 12 ancianos respectivamente.[413] [414]
Se han registrado 83.341 acciones de protección a víctimas de violencia de género tras el primer mes del estado de alarma.[415]
Recibirá la Medalla de Oro de la ciudad complutense el Hospital Universitario Príncipe de Asturias de Alcalá de Henares.[416]
Centros de Educación Infantil de Andalucía se van al cierre por carecer de medios para sostener los sueldos de sus empleados. Las ayudas de la Junta no evitan los ERTE en las empresas que le prestan servicios.[417]
Fallecen Rafael Garces, el tercer policía municipal, y Jesús Vaquero, jefe de neurocirugía del Hospital Puerta del Hierro, por COVID-19.[418] [419]</li>
<li class="list-group-item">Mediodía: 195.944 contagiados, 20.453 muertos y 77.357 recuperados.[91]
El presidente Pedro Sánchez promete a las autonomías 14.000 millones extra de liquidez para afrontar la pandemia. También pide a las autonomías tener "mucho más refinados" los datos del coronavirus para planificar un "desconfinamiento asimétrico". El director del Centro de coordinación de Alertas y Emergencias Sanitarias, Fernando Simón, ha anunciado que se irán relajando las medidas de control cuando la transmisión del coronavirus "está realmente controlada". El presidente de la Junta de Andalucía, Juan Manuel Moreno Bonilla, pide que el desconfinamiento empiece por esta comunidad.[420] [421] [422] [423]
La presidenta de la Comunidad de Madrid, Isabel Díaz Ayuso, ha anunciado que se cerrará el miércoles la morgue del Palacio de Hielo. Asimismo, el hospital de IFEMA dejará de funcionar "a finales de mayo".[424]
La vicepresidenta de la Generalitat Valenciana, Mónica Oltra, admite que "si se hubieran tomado medidas en Madrid antes, la evolución hubiera sido diferente".[425]
Fallecen José Luis Santos, el cuarto policía municipal de Madrid; Roberto Outeiriño, exvicepresidente de la FEB y exdirigente de la IAAF; Aurelio Capilla, director médico del Hospital Beata María Ana; el concejal Manuel Ángel Jabardo y el gerente territorial de Asisa en Madrid Vicente Ferrero Galende por COVID-19.[426] [427] [428] [429] [430]</li>
<li class="list-group-item">Mediodía: 200.210 contagiados, 20.852 muertos y 80.587 recuperados.[91] Se registra la menor cifra de fallecidos en un mes. [431]
Se reúnen Pedro Sánchez y Pablo Casado para intentar terminar con las disputas políticas. Acuerdan negociar en una comisión en el Congreso la reconstrucción de España por el COVID-19.[432]
El presidente de Vox, Santiago Abascal, anuncia que epresentará una querella contra Sánchez y el Gobierno por "delitos de imprudencia".[433]
El Rey Felipe VI se reunió con la ministra de Trabajo, Yolanda Díaz, en el Palacio de la Zarzuela para analizar la crisis sanitaria.[434]
Es denunciada una residencia pública de Sant Llorenç de Savall por ocultar la salud de anciana que murió por coronavirus.[435]
El Tribunal Supremo ordena al Gobierno a distribuir material de protección a los sanitarios. El Ministerio de Sanidad asegura que los murciélagos son el origen reservorio del nuevo coronavirus.[436] [437]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"04","day":"21","year":"2020"},"end_date":{"mon1th":"04","day":"28","year":"2020"},"text":{"headline":"News Week 19","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 204.178 contagiados, 21.282 muertos y 82.514 recuperados.[91]
Las fiestas de San Fermín, en Pamplona, quedan suspendidas. [438]
El Gobierno prorroga hasta el 15 de mayo la restricción de los viajes no imprescindibles a países de la UE.[439] Se suprime el IVA al material sanitario y baja el de la prensa digital.[440]
El Ibex 35 cae un 1,32% en la apertura y pierde los 6.800, con el petróleo de EE.UU. en terreno positivo.[441] BBVA prevé una caída media del PIB del 8% este año y un crecimiento del 5,7% en 2021.[442]
La Ministra de Igualdad, Irene Montero, supera el coronavirus tras haber permanecido 42 días en aislamiento.[443]
Fallecen el periodista José María Calleja y el funcionario de prisiones Lucas F.P por COVID-19.[444] [445]
El gobierno fija el precio de las mascarillas en 96 céntimos por unidad para "evitar abusos". [446]
Fallece el actor actor y músico Esteban Yáñez por COVID-19.[447]</li>
<li class="list-group-item">Mediodía: 208.389 contagiados, 21.717 muertos y 85.915 recuperados.[91]
El Congreso de los Diputados aprueba la tercera prórroga del estado de alarma hasta el 9 de mayo.[448]
El ayuntamiento de Buñol suspende la tomatina de este año por el coronavirus.[449]
Se cierra la morgue del Palacio de Hielo.[450]
El Gobierno permitirá con restricciones que niños menores de 14 años puedan dar paseos a partir del 26 de abril.[451] [452]
Fallecen el doctor Manuel Garrido Fernández del centro de salud Alameda y el cantante Enrique Castellón Vargas, conocido como "el Príncipe gitano", por COVID-19.[453] [454]</li>
<li class="list-group-item">Mediodía: 213.024 contagiados, 22.157 muertos y 89.250 recuperados.[91]
Sindicatos médicos, colegios de enfermeros y CSIF se querellan contra el ministro Salvador Illa por negligencia contra la salud del personal sanitario y enfermos durante la crisis del coronavirus.[455]
El Tribunal Superior de Justicia de Cataluña (TSJC) ha prohibido que el personal de ambulancias lave su ropa de trabajo en casa y ha ordenado que sea la empresa la que se encargue de descontarminarlos o destruirlos.[456]
La Dirección General de Asuntos Religiosos de la Generalitat y las comunidades islámicas han acordado anular los rezos y celebraciones grupales del Ramadán por el coronavirus.[457]
La Seguridad Social habilita un segundo pago a final de mes para los autónomos afectados por el COVID-19. Aquellos que no pudieron acreditar antes del anterior pago recibirán también los 30 días anteriores.[458]
Se archiva la causa por la instalación del hospital de campaña de Sabadell que supuestamente veto del Govern.[459]</li>
<li class="list-group-item">Mediodía: 219.764 contagiados, 22.524 muertos y 92.355 recuperados.[91] Las cifras de infectados sube un 2,2%. Este crecimiento surgen al contar los casos diagnosticados confirmados y los positivos asintomáticos, siendo 5.229 nuevos casos, y no 2.796 como anunciaba de forma oficial el Gobierno. [460] [461]
La Fiscalía del Supremo se opone a la suspensión cautelar del decreto que declaró el estado de alarma.[462]
Un juez indica que la Generalitat autorizó al Ejército construir el hospital de campaña de Sabadell.[463]
El Ibex ha cerrado la sesión con una caída del 1,9%, hasta los 6.613 puntos.[464]</li>
<li class="list-group-item">Mediodía: 223.759 contagiados, 22.902 muertos y 95.708 recuperados.[91]
El Boletín Oficial del Estado publica la tercera prórroga del estado de alarma hasta el 10 de mayo.[465] El BOE no permite el desconfinamiento a niños de 14 años, solo menores de esta edad acompañados con adultos.[466]
El Gobierno permitirá salir a pasear y hacer deporte desde el 2 de mayo si la evolución sigue siendo favorable.[467]
Centros de menores piden poder salir con más de 3 niños porque si no tendrían que salir en varios turnos, pasando al final cuatro horas.[468]
El Banco de Desarrollo del Consejo de Europa inyecta en la Comunidad de Madrid 200 millones de euros para combatir la pandemia del coronavirus.[469]
Se realiza una cacerolada a las 19:00 como modo de protesta contra la gestión del Gobierno frente a la crisis sanitaria.[470]
Fallece la enfermera María Ángeles Espinosa Rondan del Hospital Punta Europa de Algeciras por COVID-19.[471]</li>
<li class="list-group-item">Mediodía: 207.634 contagiados, 23.190 muertos y 98.732 recuperados.[91]
El Gobierno envía esta semana a Bruselas el Plan Presupuestario con las medidas y previsiones tras la crisis del coronavirus.[472]
Se inicia el desconfinamiento infantil a niños menores de 14 años acompañados tras más de 40 días cuarentena.[473] [474] Los Fiscales de Menores deciden abrir expedientes a menores entre 14 a 17 años que se salten el confinamiento más de una vez.[475] La ministra de Defensa, Margarita Robles, advierte que si no se cumplen las medidas con los niños existe la posibilidad de dar marcha atrás.[476]
El presidente del Gobierno, Pedro Sánchez, se reúne con las comunidades autónomas con los que planeará el desconfinamiento a dos días de que el Consejo de Ministros apruebe tal plan.[477]
El director del Centro de Coordinación de Alertas y Emergencias Sanitarias, Fernando Simón, ha explicado en líneas generales el proceso del desconfinamiento y recomendaciones sanitarias para asegurar la vigilancia epidemiológica, la identificación y contención precoz de fuentes de contagio y continuar con las medidas de protección colectiva.[478]</li>
<li class="list-group-item">Mediodía: 209.465 contagiados, 23.521 muertos y 100.875 recuperados.[91]
Se suspende el juicio 'sine die' contra Cifuentes sobre el ‘caso máster’ por el coronavirus.[479]
El Ministerio del Interior no ha detectado un incumplimiento generalizado en la salida de niños a la calle durante el domingo.[480]
Comienza un estudio en 36.000 hogares para conocer la dimensión real de la pandemia.[481]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"04","day":"28","year":"2020"},"end_date":{"mon1th":"04","day":"30","year":"2020"},"text":{"headline":"News Week 20","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 210.773 contagiados, 23.822 muertos y 102.548 recuperados.[91]
El Gobierno ha presentado su plan de desescalada del confinamiento por cuatro fases de duración de dos semanas cada una.[482] Los alumnos de 4º de Eso, 2º de Bachillerato y de FP podrán volver a las aulas en la fase 2 voluntariamente y divididos en grupos.[483]
Sanidad autoriza un ensayo clínico de un fármaco de PharmaMar para el coronavirus.[484]
El Congreso crea por unanimidad la Comisión que debatirá la Reconstrucción tras el COVID-19.[485]
La Fundación La Caixa dona un millón de euros más a la campaña 'Ningún hogar sin alimentos' para paliar el desabastecimiento de comida a consecuencia del coronavirus.[486]
Comisiones Obreras denuncia a la Consejería madrileña de Sanidad por incumplir las medidas del Ministerio de Sanidad y exponer a por sanitarios con material defectuoso.[487]
La Asociación El Defensor del Paciente pide a Fiscalía que investigue la residencia Amavir de Valdebernardo.[488]</li>
<li class="list-group-item">Mediodía: 212.917 contagiados, 24.275 muertos y 108.947 recuperados.[91]
La española Seat, propiedad del grupo Volkswagen, pierde 48 millones en el primer trimestre por el impacto del coronavirus.[489]
El Gamelab de Barcelona y la Marcha del Orgullo Gay de Madrid se celebrarán de manera en línea.[490] [491]
El presidente del Gobierno Pedro Sánchez ha acusado a la oposición de buscar "cualquier excusa" para no llegar a acuerdos, declarando que "hemos cometido errores, pero también aciertos en la gestión".[492] Sánchez también espera poner en marcha en mayo el Ingreso Mínimo Vital.[493]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"05","day":"01","year":"2020"},"end_date":{"mon1th":"05","day":"07","year":"2020"},"text":{"headline":"News Week 21","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 215.216 contagiados, 24.824 muertos y 114.678 recuperados.[91]
Se cierra hospital de campaña de IFEMA tras atender a 4.000 pacientes con coronavirus.[503] La Delegación del Gobierno de Madrid abre una investigación por el acto de clausura del hospital de IFEMA.[504]
Investigadores del Centro Nacional de Biotecnología (CNB), del Consejo Superior de Investigaciones Científicas (CSIC), iniciarán la próxima semana ensayos con animales el candidato a vacuna frente a COVID-19.[505]
El Ministerio de Sanidad prohíbe la práctica de deporte individual y los paseos de las personas residentes en los centros sociosanitarios de mayores.[506]</li>
<li class="list-group-item">Mediodía: 216.582 contagiados, 25.100 muertos y 117.248 recuperados.[91]
Se prepara el desconfinamiento en fase 0 en España y en fase 1 en algunas islas de Baleares y Canarias. En cuanto a las franjas horarias, se podrá pasear una vez al día y hacer ejercicio de 6:00 a 10:00 de la mañana y de 20:00 a 23:00 horas de la noche. Se permite la salida de niños mayores de 14 años de 12:00 a 19:00 y a ancianos de 10.00 a 12.00 y de 19.00 a 20.00.[507] [508] [509]
El Partido Popular ha presentado una proposición no de ley en el Congreso en la que plantea al Gobierno un plan de choque para hacer frente al coronavirus que favorezca la compra de test a biotecnológicas españolas.[510]
El Gobierno desbloqueará otros 24.000 millones de euros en avales del ICO la próxima semana.[511]
Se realiza una cacerolada a las 21:00 en protesta de la gestión del Gobierno. El Partido Vox da su apoyo al evento.[512]
El número de residentes fallecidos en Madrid por otras patologías supera a los decesos por coronavirus por primera vez desde la crisis.[513]</li>
<li class="list-group-item">Mediodía: 217.466 contagiados, 25.264 muertos y 118.902 recuperados.[91]
El Gobierno ha recibido durante unas 14,5 millones de mascarillas para su reparto por el país a partir del lunes.[514] La Delegación del Gobierno distribuye 1,8 millones de mascarillas en Madrid.[515]
La presidenta de la Comunidad de Madrid, Isabel Díaz Ayuso, reclama al presidente Pedro Sánchez que los alumnos puedan volver a clase al menos 15 días antes de que acabe el curso escolar.[516]
Renfe redujo un 17,7% en los ingresos generados por sus trenes AVE y Larga Distancia ya en el primer trimestre de la crisis sanitaria.[517]
La doctora Patricia Pozo-Rosich de la Unidad de Cefaleas del Hospital Vall d'Hebron de Barcelona, ha explicado que la cefalea o dolor de cabeza intenso se ha detectado como un síntoma de alerta del COVID-19.[518]</li>
<li class="list-group-item">Mediodía: 218.011 contagiados, 25.428 muertos y 121.343 recuperados.[91]
Comienza la fase 0 con dentistas, ópticas, peluquerías y pequeño comercio reabriendo sus puertas.[519] Según ATA, solo un 20% de comercios han abierto.[520]
El ministro de Justicia, Juan Carlos Campo, ha negado que se oculten cifras de muertes con coronavirus en su comparecencia en comisión en el Congreso.[521]
La CEOE prevé una caída del PIB de entre el 8 y el 15,5 % en 2020 por COVID-19.[522] El Ibex 35 se hunde un 3,6% y pierde los 6.700 puntos por el miedo a la guerra comercial.[523]</li>
<li class="list-group-item">Mediodía: 219.329 contagiados, 25.613 muertos y 123.486 recuperados.[91]
El Gobierno ha logrado el apoyo del partido Ciudadanos liderado por Inés Arrimadas, sumados Unidas Podemos, Más País, Compromís, Teruel Existe, PRC y Nueva Canarias para la cuarta prórroga del Estado de alarma.[524]
El Consejo de Ministros ha apruebado un tercer tramo de la línea de avales del ICO para empresas por valor de 24.500 millones de euros.[525]
El anterior mes de abril multiplica por siete el que había sido ante el peor abril con más desempleo, obteniendo una cifra 282.891 desempleados por la crisis del coronavirus.[526]
El ministro de Inclusión, Seguridad Social y Migraciones, José Luis Escrivá, estima que el ingreso mínimo vital costará 3.000 millones de euros al año.[527]
Fallece Amador Suárez, el exvicepresidente del Real Madrid por COVID-19.[528]</li>
<li class="list-group-item">Mediodía: 220.325 contagiados, 25.857 muertos y 126.002 recuperados.[91]
El Gobierno aprueba la cuarta prórroga del estado de alarma hasta el 24 de mayo.[529]
La Comisión Europea (CE) calcula que caerá un 9,4 % el PIB español y aumentará hasta el 18,9 % la tasa del paro este año a consecuencia de la crisis del coronavirus.[530]
La Junta de Andalucía propone el pase a la fase 1 de la desescalada de la autonomía, con excepciones dentro de Granada y Málaga, y movilizará más de 300 millones para la reactivación del sector turístico.[531] [532] La Generalitat pide que toda la Comunitat Valenciana pase el lunes a la Fase 1 de la desescalada.[533] El Govern propone mantener en fase 0 toda Cataluña, menos Ebre, Tarragona y Aran.[534]
Fernando Simón, director del Centro de Coordinación de Alertas y Emergencias Sanitarias opta por no revelar la identidad de los expertos que deciden las fases de la desescalada. Se ha señalado que esto es una violación del artículo 11 de la Ley General de Salud Pública.[535]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"05","day":"07","year":"2020"},"end_date":{"mon1th":"05","day":"14","year":"2020"},"text":{"headline":"News Week 22","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 221.447 contagiados, 26.070 muertos y 128.511 recuperados.[91]
Los datos de Ministerio muestran 754 casos nuevos, si bien ciñéndose estos a los diagnosticados por test de PCR, la cifra es de 1.122. Si se incluyen los diagnosticados por test de anticuerpos, crece en 3.173.[536]
Madrid solicita al Gobierno entrar en la fase 1 de la desescalada pese a la dimisión de su directora de salud pública Yolanda Fuentes.[537] [538] [539] Los sindicatos médicos ven precipitado esta petición.[540]
Madrid hará 200.000 test rápidos a pacientes con síntomas en los centros de salud.[541]
El próximo lunes 18 de mayo 72.000 alumnos vascos volverán a las aulas, obligados a usar mascarillas.[542]
Los ingresos de Telefónica llegaron a unos 406 millones de euros en el primer trimestre del año, lo que supone un 56,2% más que en el primer trimestre de 2019, y abandona sus objetivos financieros por la crisis sanitaria.[543]
Fallece el expolicía Antonio González Pacheco, conocido por 'Billy el Niño' y acusado de torturas durante el franquismo, fallece por COVID-19.[544]</li>
<li class="list-group-item">Mediodía: 222.857 contagiados, 26.299 muertos y 131.148 recuperados.[91]
El Gobierno no contempla la apertura de las fronteras internacionales hasta julio y busca criterios coordinados con la UE.[545]
Las provincias de Mallorca, Murcia, Zaragoza, Cuenca y Guadalajara pasan a la fase 1. Madrid y Barcelona no consiguen pasar de fase.[546] [547] [548]
El vicepresidente Pablo Iglesias propone crear una renta mínima europea.[549] Empresas y sindicatos han acordado los términos para extender los ERTE hasta el 30 de junio.[550]
El partido político PP denuncia al Gobierno ante la Fiscalía por las mascarillas defectuosas de los sanitarios.[551]
Se detecta el primer caso en España y sexto en el mundo de un gato doméstico infectado por coronavirus.[552]</li>
<li class="list-group-item">Mediodía: 223.578 contagiados, 26.478 muertos y 133.952 recuperados.[91]
El BOE ha publicado el real decreto que establece la cuarta prórroga del estado de alarma hasta el 24 de mayo.[553]
El Gobierno levanta las restricciones del estado de alarma a los procesos electorales en las comunidades de Galicia y País Vasco.[554]
El director del Centro de Coordinación de Alertas y Emergencias Sanitarias Fernando Simón ha valorado positivamente los datos "que confirman la tendencia descendente".[555]
Se regula la entrada de turistas por avión proteger a la población nacional.[556]</li>
<li class="list-group-item">Mediodía: 224.390 contagiados, 26.621 muertos y 136.166 recuperados.[91]
Pasan a la fase 1 los territorios de Galicia, Asturias, Cantabria, País Vasco, La Rioja, Navarra, Aragón, Extremadura, Murcia, Canarias y Baleares, Ceuta y Melilla.[557]
El presidente del Gobierno, Pedro Sánchez, se reúne con los presidentes autonómicos tras sus quejas sobre el ritmo de la desescalada.[557]
El BOE ha publicado las condiciones a aplicar en la fase 1 de la desescalada en materia de movilidad.[558]</li>
<li class="list-group-item">Mediodía: 227.436 contagiados, 26.744 muertos y 137.139 recuperados.[91]
Comienza la fase 1 de la desescalada.[560] El Gobierno vasco no permite la visita a segundas residencias y mantiene cerrados bibliotecas, museos, cines y teatros.[561] Andalucía pasa a la fase 1 menos Málaga y Granada.[562] Madrid solicita al Gobierno el pase a la fase 1.[563]
El Gobierno flexibiliza las condiciones para que se puedan realizar despidos en los 6 meses posteriores a la finalización de los ERTE.[564]
Diez hospitales españoles prueban un fármaco contra un tipo de neumonía causada por el coronavirus.[565]</li>
<li class="list-group-item">Un vuelo de Iberia Express con destino a Gran Canaria, los pasajeros denunciaron el incumplimiento de las distancias de seguridad mínimas al ir lleno.[566] Fernando Simón ha advertido que en las zonas más turísticas "el impacto" de no garantizar las distancias entre pasajeros los aviones "será mayor".[567]</li>
<li class="list-group-item">Un colectivo de familiares se querella contra Ayuso, la consejería de Sanidad y directores de residencias en Madrid.[568] El partido Vox convoca unas manifestaciones en coche para el 23 de mayo contra la gestión del Gobierno.[569]</li>
<li class="list-group-item">Tarde: 228.030 contagiados, 26.920 muertos y 138.930 recuperados.[91]
La ministra de Hacienda, María Jesús Montero, anuncia una ley para la protección "efectiva" de las distintas realidades familiares.[570]
El Gobierno ha sondeado los partidos del Congreso su disposición a una nueva prórroga del Estado de alarma se extienda por el periodo de un mes.[571] También ha prohibido las rebajas en las tiendas para evitar aglomeraciones y ha pedido explicaciones a Iberia por la aglomeración en el vuelo a Las Palmas.[572] [573]
La Asociación Defensor de El Paciente denuncia ante la Fiscalía y el Tribunal Supremo a la presidenta de la Comunidad de Madrid, Isabel Díaz de Ayuso, por los fallecidos en las residencias.[574] Un abogado ha presentado una querella penal contra el Ministro Salvador Illa por un supuesto delito de prevaricación administrativa.[575]
Javier Ortega Smith es ingresado con trombos en la pierna y los pulmones por efecto del COVID-19.[576]</li>
<li class="list-group-item">Mediodía: 228.691 contagiados, 27.104 muertos y 140.823 recuperados.[91]
Entre el 26 de abril y el 12 de mayo, los contagios incrementaron un 35'3% en menores de 10 años y un 40'9% en edades de 10 a 19 años.[577]
El Gobierno saca adelante el decreto-ley de "medidas procesales y organizativas para hacer frente a la Covid-19 en el ámbito de la Administración de Justicia" con los votos en contra del PP, Vox y Ciudadanos.[578]
Madrid y Valencia solicitan de nuevo a Sanidad la fase 1 de desescalada.[579] [580] La Comunidad de Madrid cifra en mil millones las pérdidas por seguir en fase 0 esta semana.[581]
Fallece el primer sanitario en Extremadura por COVID-19.[582] La esposa del fallecido médico valenciano Vicente Sánchez por coronavirus se ha querellado contra la consellera de Sanidad Universal, Ana Barceló.[583]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"05","day":"14","year":"2020"},"end_date":{"mon1th":"05","day":"21","year":"2020"},"text":{"headline":"News Week 23","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 229.540 contagiados, 27.321 muertos y 143.374 recuperados.[91]
Los grupos del Congreso PSOE, PP, Vox, Unidas Podemos, ERC, Cs y PNV pactan acudir a la nueva Comisión para la Reconstrucción tras el coronavirus, así como para acordar la documentación con la que se trabajará.[584]
Un proyecto liderado por el Consejo Superior de Investigaciones Científicas (CSIC) estudia el origen y expansión del coronavirus en España.[585] También la OCU no detecta rastros de COVID en los envases de los alimentos del supermercado.[586]
La mayoría de comunidades autónomas rechazan la propuesta de la ministra de Educación, Isabel Celaá, la cual los niños menores de seis años retomen a las aulas.[587]
El Ayuntamiento concede la Medalla de Honor al "pueblo de Madrid" por su comportamiento ante la pandemia.[588]</li>
<li class="list-group-item">Mediodía: 230.183 contagiados, 27.459 muertos y 144.738 recuperados.[91]
La Comunidad Valenciana, Castilla-La Mancha, Málaga y Granada pasan a la fase 1.[590] [591] El Gobierno no deja que Madrid pase a la fase 1.[592] El Ministerio de Sanidad dejará Salvador Illa permite a Madrid una fase media 0,5 con algunas restricciones menos.[593]
Madrid realizará las pruebas de selectividad EvAU con mascarilla y guantes presencialmente en las universidades en julio si la región está en la Fase 2.[594]
Sanidad presenta los resultados preliminares del estudio, ENECovid19, mostrando que sólo un 5% de los españoles poseen anticuerpos frente al coronavirus.[595]
El Ibex cierra la semana en los 6.474,9 puntos, tras sufrir una caída del 4,5%. Mientras, la prima de riesgo se situó en los 135 puntos.[596]
El Boletín Oficial del Estado publica la prórroga hasta el 15 de junio los controles fronterizos por la pandemia.[597]
Fallece el turista del Imserso procedente de Madrid, quien llevaba 67 días ingresado en la UCI, por COVID-19. Fue el segundo caso positivo que se diagnosticó en Menorca.[598]
Se inaugura un monumento a las víctimas de coronavirus al lado del Palacio de Cibeles de Madrid.[599]</li>
<li class="list-group-item">Mediodía: 230.698 contagiados, 27.563 muertos y 146.446 recuperados.[91]
El Boletín Oficial del Estado publica las nuevas normas de los territorios en fase 0, 1 y 2, que entran en vigor este lunes.[600]
El presidente del Gobierno, Pedro Sánchez, solicita al Congreso para una nueva prórroga de un mes del estado de alarma.[601]
El ministro de Ciencia e Innovación, Pedro Duque, ha asegurado que se está probando una vacuna de la Covid-19 en ratones.[602]
Aumenta la pobreza en Madrid con un incremento del 30% de las entregas del Banco de Alimentos de Madrid, hasta llegar a niveles superiores de la crisis del 2008.[603]
Se abren parroquias en Cataluña en la Fase 0 y el Adolfo Suárez Madrid-Barajas, otros cuatro aeropuertos y ocho puertos como únicos puntos de entrada a España.[604] [605]
Centenares de personas se reúnen en protesta en Logroño y en Madrid para pedir la dimisión del Gobierno de España.[606] [607] La Delegación del Gobierno en Castilla y León prohíbe las manifestaciones de Vox para el próximo sábado día 23.[608]</li>
<li class="list-group-item">Mediodía: 231.350 contagiados, 27.650 muertos y 149.576 recuperados.[91]
El Tribunal Supremo acumula una veintena de denuncias y querellas contra el Gobierno por su gestión de la pandemia.[609]
El vicepresidente Pablo Iglesias reconoce que no fueron capaces de "dimensionar" la crisis y le hubiera gustado haber actuado "antes".[610] El Gobierno calcula en 3.370 millones el impacto máximo de la extensión de los ERTE.[611] La Generalitat estima una pérdida de unos 15.000 millones de euros en el sector turístico catalán.[612] Galicia calcula que su PIB cae en 370 millones, un 0,59%, por semana que pasa en fase 1.[613]</li>
<li class="list-group-item">Mediodía: 231.350 contagiados, 27.650 muertos y 149.576 recuperados.[91]
Se permiten las rebajas en los lugares que aún siguen en la Fase 0 de la desescalada mientras no generen aglomeraciones.[614] [615]
Las mascarillas serán obligatorias en todos los espacios cerrados al igual que en el transporte público.[616] El Consejo General de Colegios Médicos anuncia una querella contra Sanidad por poner en riesgo a los sanitarios.[617]
La vicepresidenta primera del Gobierno, Carmen Calvo, ha defendido el estado de alarma prometiendo que será la última y se podrá levantar por territorios.[618] Ciudadanos no apoya la prorrogar del estado de alarma.[619]
Decenas de manifestantes se concentran en Toledo y en la sede del PSOE de Madrid pidiendo la dimisión de Sánchez.[620] [621]</li>
<li class="list-group-item">Mediodía: 231.606 contagiados, 27.709 muertos y 150.376 recuperados.[91]
El Gobierno aprueba 7 millones de euros en ayudas para todos los sectores de la cultura.[622]
El Consejo de Ministros solicita al Congreso de los Diputados una quinta y última prórroga del estado de alarma hasta el 27 de junio.[623] El Gobierno pacta con Ciudadanos una nueva prórroga del estado de alarma de 15 días.[624]
El científico español Juan Andrés, director técnico del laboratorio Moderna Therapeutics, ha dado a conocer "los primeros resultados son muy prometedores" en la carrera de la vacuna contra la COVID-19.[625]
Fallece el nefrólogo e investigador del Gregorio Marañón Alberto Tejedor por COVID-19.[626]</li>
<li class="list-group-item">Mediodía: 232.037 contagiados, 27.778 muertos y 150.376 recuperados.[91]
El presidente del Gobierno, Pedro Sánchez, pide perdón por sus errores y el apoyo de la prórroga del estado de alarma hasta el 7 de junio.[627]
El Congreso aprueba la extensión por 15 días del estado de alarma con el apoyo de Ciudadanos y PNV.[628] [629]
PSOE y Unidas Podemos pactan con EH Bildu derogar "de forma íntegra" la reforma laboral de 2012 tras la de la crisis sanitaria.[630] [631]
El Gobierno y los agentes sociales han comenzado los trabajos de la comisión que estudiará mantener los ERTE más allá del 30 de junio.[632]
Se proclama obligatorio el uso de mascarilla en espacios públicos por las personas mayores de seis años si no se puede garantizar la distancia de seguridad.[633]
El Consejo de Gobierno ha autorizado este miércoles un gasto de 15,9 millones de euros en ayudas al alquiler de vivienda para minimizar el impacto de la crisis sanitaria.[634]
La Rioja registra 951 donaciones por 2,3 millones de euros para la lucha contra el coronavirus desde el pasado 24 de marzo.[635]
El diputado Isidro Martínez Oblanca da positivo en COVID-19.[636]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"05","day":"21","year":"2020"},"end_date":{"mon1th":"05","day":"28","year":"2020"},"text":{"headline":"News Week 24","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 232.555 contagiados, 27.888 muertos y 150.376 recuperados.[91]
PSOE envía un comunicado asegurando que se "anula el punto primero" del acuerdo con Unidas Podemos y EH Bildu.[637] [638] Vox deja la comisión de reconstrucción y el CEOE suspende el diálogo con el Gobierno tras el pacto.[639] [640]
El ministro de Ciencia e Innovación, Pedro Duque, espera que en otoño se ensaye en humanos una de las vacunas españolas contra el COVID-19.[641]
El Tesoro elevará a 130.000 millones las emisiones de deuda nueva para financiar la crisis del coronavirus.[642]
El Ibex 35 abre con una caída del 1,5% y pierde los 6.600 ante las nuevas tensiones entre EE.UU. y China.[643]</li>
<li class="list-group-item">Mediodía: 233.037 contagiados, 27.940 muertos y 150.376 recuperados.[91]
Sanidad ha aprobado el cambio a la fase 1 desde el lunes a Madrid, Barcelona y las ciudades de Castilla y León.[644] A la Fase 2 pasan el lunes 22 millones de habitantes, el 47% de la población, residentes en seis provincias de Andalucía, Aragón, Asturias, las islas que quedaban en Canarias y Baleares, Cantabria, dos provincias de Castilla-La Mancha, tres zonas sanitarias de Cataluña, Extremadura, Galicia, Murcia, Navarra, País Vasco, La Rioja y Ceuta y Melilla.[645]
El Banco de España aboga por intervenir el mercado de alquiler, cuyo acceso se agravará por el coronavirus.[646]
Cientos de hosteleros se han manifestado en Bilbao para denunciar su "abandono" por parte de las administraciones públicas.[647] En Madrid es la líder de Hogar Social, Melisa Domínguez, en las protestas frente a la sede del PSOE en Ferraz.[648]
Familiares de una fallecida por COVID-19 se querellan contra Fernando Simón por homicidio y por falsear el número de muertos.[649]</li>
<li class="list-group-item">Mediodía: 234.824 contagiados, 28.628 muertos y 150.376 recuperados.[91]
El Boletín Oficial del Estado publica la quinta prórroga del estado de alarma hasta el 7 de junio.[650]
El partido Vox ha organizado un manifestación en coche por todas las capitales de provincia españolas denominada “caravana de la libertad” en protesta contra la gestión de Pedro Sánchez de la crisis del coronavirus.[651] [652] [653]</li>
<li class="list-group-item">Mediodía: 235.290 contagiados, 28.678 muertos y 150.376 recuperados.[91]
El municipio murciano de Totana permanecerá en fase 1 por un brote de COVID-19.[654]
Francia desaconseja a sus ciudadanos viajar a a España en verano, tachando la ministra de Transición Ecológica, Elisabeth Borne, las medidas de España de "contradictorias"[655]
El Ministerio de Sanidad recomienda extremar las medidas de distanciamiento social e higiene en las playas.[656]
La ministra de Hacienda y portavoz del Gobierno, María Jesús Montero, ha señalado la posibilidad de extender los ERTE más allá del 30 de junio, especialmente en el sector turístico.[657]
El presidente del Gobierno, Pedro Sánchez, ha comunicado a los presidentes de las comunidades autónomas que el primer pago del fondo no reembolsable de 16.000 millones de euros se realizará el próximo mes.[658]</li>
<li class="list-group-item">Mediodía: 235.772 contagiados, 28.752 muertos y 150.376 recuperados.[91]
Comienza la fase 1 en Madrid y Barcelona y la fase 2 en Andalucía (Almería, Córdoba, Cádiz, Huelva, Jaén y Sevilla), Aragón, Asturias, Baleares (Ibiza, Menorca y Mallorca), Canarias (Tenerife, Gran Canaria, Lanzarote, Fuerteventura y La Palma), Cantabria, Castilla-La Mancha (Guadalajara y Cuenca), Extremadura, Galicia (Lugo, La Coruña, Orense y Pontevedra), Murcia, Navarra, País Vasco y La Rioja. Además, Ceuta y Melilla.[659] Algunas comunidades en fase 2 permiten la apertura de escuelas de forma voluntaria y parcial.[660] Madrid reabre sus parques y La Moncloa permite las ruedas de prensa presenciales.[661] [662] Barcelona también abre sus playas.[663]
Las medidas de confinamiento generaron la destrucción de 816.767 empleos entre el 12 de marzo y el 12 de mayo, según la ministra de Trabajo, Yolanda Díaz.[664] Una investigación realizada por varias universidades revela que el confinamiento ha aumentado el malestar psicológico del 46% de los españoles mayores de edad.[665]
La Generalitat frena dos hospitales de campaña montados por el Ejército y la Guardia Civil en Sabadell y Sant Andreu de la Barca para aliviar la saturación de los centros médicos de referencia en esas ciudades metropolitanas de Barcelona.[666]
El Gobierno anuncia el levantamiento de la cuarentena para turistas extranjeros el 1 de julio.[667]
Médicos Sin Fronteras finaliza su intervención de respuesta a la COVID-19 en España.[668]
Canarias solicita el pase a la fase 3 para La Gomera, El Hierro y La Graciosa.[669]</li>
<li class="list-group-item">Mediodía: 235.400 contagiados, 26.834 muertos y 150.376 recuperados.[91]
La cifra de muertos por coronavirus ha sido rectificda porque se han descartado casos que eran sospechosos pero no confirmados por PCR.[91] [670]
Sanidad publica los informes técnicos de todas las comunidades autónomas para cambiar de fase.[671]
El Consejo de Ministros ha acordado decretar el luto nacional de diez días a partir del miércoles por los fallecidos durante la pandemia.[672]
El Gobierno riega la Seguridad Social con 30.500 millones por el agujero de la crisis y habilita un nuevo crédito a la Seguridad Social de 14.000 millones ante para cubrir el exceso de déficit. El Ejecutivo ha habilitado un préstamo sin intereses de 16.500 millones de euros para cubrir el gasto en prestaciones de desempleo derivadas de la crisis sanitaria.[673]
El Ministerio de Asuntos Exteriores, UE y Cooperación ha contratado servicios de transporte aéreo por importe de 3,3 millones de euros para repatriar españoles que están bloqueados en el extranjero por el cierre de fronteras.[674]
Madrid empieza reabrir las puertas de sus museos.[675]</li>
<li class="list-group-item">Mediodía: 236.259 contagiados, 27.117 muertos y 150.376 recuperados.[91]
Se reinicia el servicio de renovación del DNI y suprimen las limitaciones para los niños y el deporte en zonas en fase 2.[676] [677]
El Director Adjunto Operativo de la Guardia Civil, Laurentino Ceña, ha presentado su dimisión tras la destitución del jefe de la Comandancia de Madrid, Diego Pérez de los Cobos, por ministro del Interior Fernando Grande-Marlaska, por "pérdida de confianza" al no comunicar que había remitido al juzgado un informe sobre las manifestaciones del 8M.[678]
La Fiscalía investiga penalmente a más de 170 residencias y 22 casos ya han pasado a manos del juzgado.[679] Vox presenta una querella contra el secretario de Estado de Seguridad, Rafael Pérez, y la directora general de la Guardia Civil, María Gámez.[680] [681]
Según los resultados de la Sociedad Española de Medicina Interna (SEMI), uno de cada tres pacientes hospitalizados por COVID-19 en España desarrolló dificultad respiratoria y uno de cada cinco falleció.[682]
La Central Sindical Independiente y de Funcionarios pide incluir a policías, guardias civiles, trabajadores de instituciones penitenciarias en decreto de accidente laboral por COVID-19.[683]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"05","day":"28","year":"2020"},"end_date":{"mon1th":"05","day":"31","year":"2020"},"text":{"headline":"News Week 25","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 236.769 contagiados, 27.118 muertos y 150.376 recuperados.[91]
Nissan cierra de su fábrica de coches en Barcelona y la de Alcoa en Lugo.[684] [685] El estado de alarma provocado una caída del 31,5% del comercio minorista según el Instituto Nacional de Estadística.[686] El Ibex sube un 0,69% y supera los 7200 puntos.[687]
La consellera de Salut Alba Vergés aseguró en el Parlament que la pandemia ha provocado el aplazamiento de unas 70.000 operaciones quirúrgicas.[688]</li>
<li class="list-group-item">El Juzgado de Instrucción número 51 pospone al 10 de junio la declaración del delegado de Gobierno, José Manuel Franco, por presunta prevaricación sobre la celebración del 8-M.[689] La Asociación contra la Gestión del Coronavirus ha pedido la imputación de Fernando Simón por los delitos de desobediencia y denegación de auxilio.[690]
El sindicato SummAT denuncia que sanitarios han estado llevando material sin homologar desde primeros de mayo.[691]
Ángel Juárez reclama 150.000 euros a la Generalitat por la muerte de su madre en una residencia de Barcelona.[692]
Sanidad anuncia un nuevo hospital de Madrid para emergencias con 1.000 camas listo para el próximo otoño.[693]</li>
<li class="list-group-item">Mediodía: 237.906 contagiados, 27.119 muertos y 150.376 recuperados.[91]
El Consejo de Ministros aprueba un Real Decreto-ley aprobando el Ingreso Mínimo Vital.[694]
El Ministerio de Defensa decide que los militares dejen de prestar su apoyo en hospitales de Canarias, Valladolid y Madrid.[695]
La jueza Carmen Rodríguez-Medel, ha rechazado imputar a Fernando Simón frente a las dos querellas presentadas contra él.[696]
El ministro del Interior, Fernando Grande-Marlaska, propuso ante el senado sustituir la "ley mordaza" por una nueva Ley de Seguridad Ciudadana frente a la a la cibercriminalidad.[697]
Sanidad permite el paso a la fase 2 en toda la Comunidad Valenciana, Málaga, Granada, Toledo, Ciudad Real, Albacete y algunas regiones de Cataluña y Castilla y León el próxima lunes. Las islas de La Gomera, El Hierro, La Graciosa y Formentera pasarán a la fase 3.[698] Cantabria solicita el pase a la fase 3.[699]
Un pasajero sometido a aislamiento y en investigación tras dar positivo en coronavirus en un vuelo de Madrid a Lanzarote.[700]</li>
<li class="list-group-item">Mediodía: 238.564 contagiados, 27.121 muertos y 150.376 recuperados.[91]
El Boletín Oficial del Estado publica las nuevas normas de los territorios en fase 3 que entran en vigor este lunes, permitiéndose las barras de los bares, reuniones de 20 personas, pero no los locales nocturnos.[701] [702] [703]
Se registran 83 nuevos casos positivos diarios de coronavirus en Madrid tras dos semanas después de las manifestaciones del barrio de Salamanca.[704] [705]
El secretario general del PP, Teodoro García Egea, ha pedido la dimisión del presidente del Gobierno, Pedro Sánchez, y al vicepresidente segundo, Pablo Iglesias, por su "pésima" gestión económica de la crisis.[706]
Se investiga al príncipe Joaquín de Bélgica, sobrino del rey Felipe de Bélgica, al dar positivo por COVID-19 luego de haber celebrado un fiesta en Córdoba el pasado martes por su regreso a España.[707]
La Fiscalía de Madrid investiga varios hospitales para averiguar los criterios de ingreso de pacientes en la UCI durante la crisis sanitaria.[708]
El presidente del Consejo General de Colegios Oficiales de Médicos, Serafín Romero, ha pedido a los partidos que la profesión médica sea declarada de riesgo.[709]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"06","day":"01","year":"2020"},"end_date":{"mon1th":"06","day":"07","year":"2020"},"text":{"headline":"News Week 26","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 239.429 contagiados, 27.127 muertos y 150.376 recuperados.[91]
El 70% de la población pasa a la fase 2 del plan de desescalada.[718] La presidenta de Madrid, Isabel Díaz Ayuso, anuncia que pedirá pase a la fase 2 para la semana que viene.[719]
Reabren el museo Guggenheim de Bilbao y las escuelas de Cataluña con restricciones en territorios en fase 2.[720] [721]
El juez Juan Javier Pérez de Madrid rechaza admitir las querellas presentadas contra Fernando Simón por homicidio imprudente de parte de familiares de una fallecida por COVID-19.[722]</li>
<li class="list-group-item">Mediodía: 239.638 contagiados, 27.127 muertos y 150.376 recuperados.[91]
El Gobierno Vasco y la Junta de Extremadura solicitan a Sanidad pasar a la fase 3 de desescalada a partir del 8 de junio.[723] [724]
Ciudadanos cierra un acuerdo con el Gobierno que garantiza la aprobación en el Congreso de la sexta y última prórroga del estado de alarma.[725]
El número de prestaciones por desempleo asendieron a 5.988.572 en mayo según el Servicio Público de Empleo Estatal, el cual desembolsó unos 5.121 millones, 236,2% más que hace un año, para pagarlos.[726]
La Asociación Española de Profesionales de los Servicios Funerarios publica un informe que sostiene que el número real de fallecidos por coronavirus en España desde el 14 de marzo hasta el 25 de mayo es de 43.985.[727]
El ministro de Sanidad, Salvador Illa, asegura que el Gobierno plantea en reforzar los protocolos costeros de recepción a migrantes tras el traslado a Soria de seis migrantes con un positivo sin ser sometidos a cuarentena.[728]</li>
<li class="list-group-item">Mediodía: 239.932 contagiados, 27.127 muertos y 150.376 recuperados.[91]
El Instituto Nacional de Estadística registra en las primeras 21 semanas de 2020 unas 43 945 muertes más que hace un año, aumentando un 24,1% la mortalidad.[729]
El Congreso aprueba la sexta y última prórroga del estado de alarma.[730] PP y Ciudadanos discrepan en dar libertad a los andaluces para circular entre provincias.[731]
La Fiscalía investiga un total de 191 investigaciones penales en residencias tras abrir 14 nuevas diligencias penales por la gestión de la pandemia del coronavirus.[732]
El juez Juan Carlos Peinado archiva la denuncia contra el alcalde de Madrid, José Luis Martínez Almeida, y el concejal de Medio Ambiente y Movilidad, Borja Carabante, por cerrar los parques durante la desecalada.[733] El juzgado de Madrid también desestima la querella contra Fernando Simón por la Asociación Española de Damnificados y Víctimas por el COVID-19 (Adavic-19) con delitos como homicidio imprudente y denegación de auxilio.[734]
Los sanitarios españoles que trabajan en primera línea contra el COVID-19 han sido galardonados con el premio Princesa de Asturias de la Concordia 2020.[735]</li>
<li class="list-group-item">Mediodía: 240.326 contagiados, 27.128 muertos y 150.376 recuperados.[91]
La Organización Mundial de la Salud (OMS) calcula un total de 27 940 de muertos por COVID-19 en España, unos 1 918 fallecidos menos registrados por Sanidad.[736] La portavoz popular en el Parlamento Europeo, Dolors Montserrat, acusa ante la Comisión Europea el descuadre de cifras de fallecimientos.[737]
La Guardia Civil apunta a Fernando Simón y Salvador Illa en ocultar un informe de la agencia de la Unión Europea para el control y la prevención de enfermedades (ECDC) que reclamaba evita actos multitudinarios. El fue informe enviado a la juez de Madrid que investiga el alcance penal del 8-M.[738]
La Asociación Española de Pediatría ha declarado que 1.400 niños han sido diagnosticados por coronavirus en España, los cuales más de la cuarta parte fueron ingresados.[739]
El IBEX 35 español cae el 0,62 %, hasta 7.600 puntos a la espera del Banco Central Europeo (BCE). Las pérdidas alcanzan el 20,62 %.[740]</li>
<li class="list-group-item">Mediodía: 240.660 contagiados, 27.133 muertos y 150.376 recuperados.[91]
El Consejo de Ministros aprueba la sexta y última prórroga del estado de alarma hasta el 21 de junio.[741]
Sanidad confirma el pasar a la Fase 2 de la Comunidad de Madrid para el lunes permitiendo la apertura de centros comerciales, gimnasios, bares y restaurantes.[742] [743]
El Juzgado de Instrucción número 39 de Madrid inhibe a favor del Tribunal Supremo de la querella contra la Isabel Díaz Ayuso, Enrique Ruiz Escudero y 10 directores por "no evitar la propagación del virus" en las residencias.[744]
El presidente del Gobierno, Pedro Sánchez pide a la presidenta de la Comisión Europea, Úrsula Von der Leyen, que la Unión fije una serie de criterios comunes para el levantamiento de las restricciones en las fronteras aplicadas por la crisis del coronavirus.[745]
El Ayuntamiento de Valencia suspende la celebración de la Noche de San Juan en las playas de la ciudad.[746]</li>
<li class="list-group-item">Mediodía: 240.978 contagiados, 27.134 muertos y 150.376 recuperados.[91]
El Boletín Oficial del Estado publica la sexta y última prórroga del estado de alarma hasta el 21 de junio.[747]
La Junta de Andalucía permite la movilidad entre las provincias andaluzas, mientras que la Junta de Castilla-La Mancha la permite entre las provincias de Cuenca y Guadalajara a partir del lunes.[748] [749]
El Grupo Parlamentario Popular pide la comparecencia de Fernando Simón en el Congreso para explicar su gestión respecto al coronavirus.[750]
Se reabren en Madrid los museos de El Prado, el Museo Nacional Centro de Arte Reina Sofía y el Museo Nacional Thyssen-Bornemisza.[751]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"06","day":"07","year":"2020"},"end_date":{"mon1th":"06","day":"14","year":"2020"},"text":{"headline":"News Week 27","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 241.310 contagiados, 27.135 muertos y 150.376 recuperados.[91]
El Gobierno cambia el reparto del fondo de 16 000 millones de euros que destinará a las comunidades por el coronavirus, debido a la resta 2 000 millones del fondo para Educación, penalizando a Catalunya, Madrid, Castilla-León y Castilla-La Mancha.[752]
La Junta de Andalucía pide suspender este año la operación Paso del Estrecho por la crisis sanitaria.[753]
Baleares no permite la apertura de discotecas y bares nocturnos para la fase 3 de la desescalada.[754]</li>
<li class="list-group-item">Mediodía: 241.550 contagiados, 27.136 muertos y 150.376 recuperados.[91]
Las comunidades de Andalucía, Aragón, Asturias, Baleares, Canarias, Cantabria, Extremadura, Galicia, Melilla, Murcia, Navarra, País Vasco, La Rioja; las provincias Cuenca, Guadalajara; y las regiones sanitarias catalanas de Alto Pirineo y Arán, Campo de Tarragona y Tierras del Ebro pasan a la fase 3 de la desescalada. Madrid, Castilla y León, Ceuta y Valencia en fase 2.[755]
La Generalitat reclama poder gestionar autónomamente la pandemia. Esquerra Republicana de Catalunya amenaza con acciones legales a Pedro Sánchez que modifique el decreto para la "nueva normalidad".[756]
La Fiscalía de Madrid archiva la denuncia por homicidio presentada por la Asociación de Defensor del Paciente tras la supuesta muerte de siete enfermos por coronavirus en el servicio de Diálisis de la Fundación Renal.[757]
La presidenta de Madrid, Isabel Díaz Ayuso, anuncia 3l nuevo hospital de emergencias de Madrid, especializado en pandemias, se situará en la Ciudad de la Justicia de Valdebebas, al lado del Instituto de Medicina legal.[758]
La Fundación para el Análisis y los Estudios Sociales (FAES) denuncia la "falta de transparencia" en el recuento de los fallecidos por coronavirus al "hacer invisibles" hasta "casi 16.000".[759]
El herbolario Josep Pàmies es investigado por los Mossos d'Esquadra tras organizar una quedada en Lleida para curar a 100 personas del coronavirus con el MMS.[760]</li>
<li class="list-group-item">Mediodía: 241.717 contagiados, 27.136 muertos y 150.376 recuperados.[91]
El Consejo de Ministros aprueba el 'Decreto de nueva normalidad' con el apoyo Ciudadanos y PNV, estableciendo la distancia de seguridad a 1,5 metros y el uso obligatorio de mascarillas al acabar el estado de alarma.[761] [762]
El forense adscrito del Juzgado Número 51 de Madrid señaló que el ministro de Sanidad Salvador Illa y Fernando Simón "subestimaron la gravedad" durante la crisis sanitaria.[763] El Gobierno de Madrid plantea tomar acciones legales contra Pablo Iglesias.[764]
El Gobierno establece en el 'Decreto de nueva normalidad' que las autonomías coordinen los centros residenciales con los recursos sanitarios del Sistema de Salud de la comunidad.[765]
Investigadores del Centro Nacional de Biotecnología (CNB) del Consejo Superior de Investigaciones Científicas (CSIC) inician la próxima semana ensayos con animales de una posible vacuna contra el COVID-19.[766]
La Central Sindical Independiente y de Funcionarios solicitó al Gobierno considerar el contagio de coronavirus como accidente laboral.[180]</li>
<li class="list-group-item">Mediodía: 241.966 contagiados, 27.136 muertos y 150.376 recuperados.[91]
El Congreso aproba por mayoría absoluta con la abstención de Vox el real decreto ley por el que se tramita el ingreso mínimo vital (IMV).[767]
El Boletín Oficial del Estado publica el decreto que marca las de medidas urgentes de prevención, contención y coordinación para hacer frente a la crisis del coronavirus. En él se declara la llamada "nueva normalidad", la cual se pondría automáticamente en los territorios que superen la Fase 3 antes del fin del estado de alarma.[768]
La Asociación de Líneas Aéreas (ALA) advirtió que el decreto de la 'nueva normalidad' supondrá una subida de tarifas aeroportuarias y ha pedido al Gobierno que asuma la totalidad de los costes derivados de los controles sanitarios.[769] La Central Sindical Independiente y de Funcionarios (CSIF) manifestó su rechazo a la apertura al público de las oficinas del Servicio Público de Empleo Estatal (SEPE) en territorios en fase 3.[770]
La Fiscalía mantiene un total de 200 investigaciones penales abiertas en residencias de mayores. El mayor número de diligencias se concentra en Madrid, con 87 abiertas, y en Cataluña, con 32.[771]
El delegado del Gobierno de Madrid, José Manuel Franco, declara ante la juez Carmen Rodríguez-Medel que no vio riesgo en la celebración de 8-M.[772]
Se cierran dos escuelas de Mataró por dos casos sospechosos de COVID-19.[773]
El Sindicato Enfermeras de Cataluña rechaza el Princesa de Asturias.[774]</li>
<li class="list-group-item">Mediodía: 242.280 contagiados, 27.136 muertos y 150.376 recuperados.[91]
La Fiscalía de Madrid archivó la investigación a la funeraria de Madrid que afirmaba la negación del servicio a los fallecidos por la COVID-19.[775] El Juzgado de Valdemoro archivó la denuncia contra la Comunidad de Madrid por presunta denegación de auxilio en la residencia de ancianos Pablo Neruda de Ciempozuelos.[776]
La presidenta de la Comunidad de Madrid, Isabel Díaz Ayuso, estima en 2 737 millones de euros el coste y anuncia la apertura de una investigación en el Gobierno sobre la gestión de las residencias durante la crisis sanitaria.[777] [778]
La juez Carmen Rodríguez-Medel del 8-M pide a Comunidad y Ayuntamiento de Madrid que informen sobre los eventos masivos públicos o privados que se celebraron entre el 5 y el 9 de marzo y si se cancelaron.[779]
La multinacional de hemoderivados Grifols inicia la producción de su inmunoglobulina hiperinmune con anticuerpos a partir del plasma de los pacientes recuperados del virus SARS-CoV-2.[780]
Save the Children y la Asociación Española de Pediatría de Atención Primaria (AEPap) piden al Gobierno y a las comunidades adelantar al verano la apertura de colegios teniendo en cuenta medidas de seguridad.[781]
La escuela de Mataró reabre el viernes tras dar negativo el caso sospechoso.[782]</li>
<li class="list-group-item">Mediodía: 242.707 contagiados, 27.136 muertos y 150.376 recuperados.[91]
La vicepresidenta primera del Gobierno, Carmen Calvo, acusa a las comunidades del retraso en el pago de los ERTE por «no hacer su trabajo previo».[783]
La jueza Carmen Rodríguez-Medel del ‘caso 8-M’ decidió archivar la causa contra el delegado del Gobierno en Madrid, José Manuel Franco, al no haber indicios suficientes.[784]
El sindicato CSIF ha denunciado las amenazas de las redes sociales que llevaron sufriendo los trabajadores del Servicio Estatal Público de Empleo.[785]
La Agencia de Salud Pública de la Generalita investiga un nuevo brote de coronavirus en La Garrocha con 31 personas afectadas.[786]
Un colegio cerrado en San Sebastián por sospecha de coronavirus da negativo en la prueba.[787]
Los expertos de la Unidad de Neonatología del servicio de Pediatría del Hospital Universitario Nuestra Señora de Candelaria, en Tenerife, afirman que el COVID-19 no se transmite por la lactancia materna.[788]</li>
<li class="list-group-item">Mediodía: 243.209 contagiados, 27.136 muertos y 150.376 recuperados.[91]
El Boletín Oficial del Estado publica el mapa de la desescalada para el 15 de junio, con todas las comunidades en fase 3 excepto en Madrid, las provincias de Barcelona, Lleida y su área metropolitana; y las provincias de Ávila, Segovia y Salamanca, aunque tendrán partes sustanciales de su territorio en esta etapa.[789] [790]
Salvador Illa confirma la autorización del pase "nueva normalidad" de Galicia presentada por el presidente de la Xunta, Alberto Núñez Feijóo, de la comunidad para el 15 de junio.[791]
El tribunal Supremo rechaza las medidas presentadas por Abogados Cristianos, que pedía la suspensión de la aplicación que prohibía las celebraciones religiosas en el exterior.[792]
Los cines reabren sus puertas en la mayoría de las ciudades españolas, acabado con la preventa de algunas de las salas en Madrid o Canarias.[793]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"06","day":"14","year":"2020"},"end_date":{"mon1th":"06","day":"21","year":"2020"},"text":{"headline":"News Week 28","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 243.605 contagiados, 27.136 muertos y 150.376 recuperados.[91]
El presidente del Gobierno, Pedro Sánchez, se reúne con los presidentes autonómicos anunciando la apertura de fronteras con los países del espacio Schengen, salvo Portugal, al 21 de junio.[794]
La presidenta de Madrid, Isabel Díaz Ayuso, ha pedido a Sánchez ahondar en medidas para el aeropuerto de Barajas, planes nacionales en caso de rebrote y rebaja de IVA del toro de lidia.[795]
Un informe firmado por los científicos María Jesús Goikoetxea y Javier Yanguas denuncia discriminación a las personas mayores en la pandemia.[796]</li>
<li class="list-group-item">Mediodía: 243.928 contagiados, 27.136 muertos y 150.376 recuperados.[91]
Empieza las solicitudes para el Ingreso Mínimo Vital hasta el 15 de septiembre.[797]
El Gobierno presenta hoy los detalles de su plan de apoyo de 3 750 millones para el sector del automóvil.[798]
El Boletín Oficial del Estado publica la orden del Ministerio de Sanidad por la que se prorrogan los criterios de restricción temporal en viajes no imprescindibles desde países del acuerdo Schengen y la Unión Europea.[799]
La Generalitat propone que Barcelona y Lleida pasen a la fase 3 el jueves 18 de junio.[800]</li>
<li class="list-group-item">Mediodía: 244.109 contagiados, 27.136 muertos y 150.376 recuperados.[91]
El Gobierno aprueba un fondo de 16 000 millones de euros para las autonomías no reembolsables destinados a la crisis causada por el coronavirus, con un reparto de 9 000 millones a Sanidad, 2 000 millones a educación y otra 800 millones a transporte.[801] [802]
El presidente del PP, Pablo Casado, ofrece al presidente del gobierno Pedro Sánchez un "Pacto de Toledo sanitario" para hacer frente a los estragos de la pandemia.[803] El líder de UGT, Pepe Álvarez, propone la reconstrucción de la economía española promoviendo la concentración de empresas en grandes grupos sectoriales y una banca pública.[804]
La Junta de Andalucía anuncia su intención de realizar test rápidos del coronavirus a todos los profesores andaluces antes del comienzo del próximo curso.[805]
Julio Iglesias cancela su gira en España de 2020 por el COVID-19.[806]</li>
<li class="list-group-item">Mediodía: 244.328 contagiados, 27.136 muertos y 150.376 recuperados.[91]
Las provincias de Lérida y Barcelona con su área metropolitana pasan a fase 3 y se abre la movilidad a toda Cataluña.[807]
El Boletín Oficial del Estado publica el real decreto ley por el que se regula los criterios de reparto del Fondo COVID-19 para las comunidades autónomas.[808]
El presidente del Gobierno, Pedro Sánchez, anuncia un homenaje a las víctimas del coronavirus para el 16 de julio.[809]</li>
<li class="list-group-item">Mediodía: 244.683 contagiados, 27.136 muertos y 150.376 recuperados.[91]
Cantabria levanta el estado de alarma y aprueba las normas de la 'nueva normalidad'.[810]
La Bolsa española cae el 0,55 % (IBEX 35) abrió con 40,40 puntos, una caída del 0,55 %, hasta los 7 445,60 puntos. En el año, las pérdidas se elevan al 22,08 %.[811]
El Gobierno lanza la campaña "Spain for sure" ("España seguro", en inglés) para atraer turistas.[812]
Comienza la desmantelamiento del hospital de IFEMA.[813]</li>
<li class="list-group-item">Mediodía: 245.268 contagiados, 27.136 muertos y 150.376 recuperados.[91] Sanidad actualiza la cifra de muertes por COVID-19 elevando los fallecidos a 28 315.[814]
Las comunidades de Galicia, Cataluña y País Vasco terminar su proceso de desescalada pasando a la 'nueva normalidad'.[815]
Sanidad detecta entre el 1 de marzo y el 31 de mayo un total de 236 casos de reacciones adversas a fármacos contra el COVID-19, principalmente hidroxicloroquina.[816]
El epidemiólogo José María Martín Moreno, doctor en Salud Pública por la Universidad de Harvard (Estados Unidos), afirma que la respuesta de España contra la pandemia llegó indiscutiblemente tarde.[817]</li>
<li class="list-group-item">Mediodía: 245.575 contagiados, 28.315 muertos y 150.376 recuperados.[91]
El Boletín Oficial del Estado (BOE) publica el listado de los medicamentos considerados esenciales en la gestión de la crisis sanitaria, entre ellos dexametasona.[818]
El Boletín Oficial de la Comunidad de Madrid (BOCM) establece la intervención de la comunidad de Madrid en residencias y hacer derivaciones si hay rebrotes.[819]
La ministra de Exteriores, Arancha González Laya, anunció el permiso de los ciudadanos británicos y de países de la Unión Europea sin necesidad de cuarentena para el 21 de junio.[820]
El alcalde de Algeciras, José Ignacio Landaluce, criticó el traslado de migrantes que están en cuarentena en el piso tutelado que gestiona la ONG Cepaim desde Almería "de noche escoltados en autobús por la Guardia Civil.[821]
Se decreta la suspensión temporal de la empresa La Espesa tras ocho casos positivos de coronavirus en las localidades aragonesas de Zaidín, Fraga, Binéfar, Tamarite y Monzón.[822]
Decenas de facultativos, titulados superiores y sindicatos médicos se concentró en la Puerta del Sol para rendir homenaje a los fallecidos por la COVID-19 y reivindicar la profesión médica.[823]
El partido Vox anuncia su ausencia en el homenaje a las víctimas por ser "una ceremonia exculpatoria" de la gestión de su Gobierno.[824]
Un sargento de San Fernando (Cádiz) da positivo por COVID-19, poniendo a 30 militares en aislamiento para evitar contagios.[825]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"06","day":"21","year":"2020"},"end_date":{"mon1th":"06","day":"28","year":"2020"},"text":{"headline":"News Week 29","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 245.938 contagiados, 28.315 muertos y 150.376 recuperados.[91]
Se restablece la normalidad en las conexiones entre Ceuta y Melilla con la España peninsular.[826]
El Gobierno de España concluye el último estado de alarma, terminado la desescalada y entrando todo el país en la 'nueva normalidad' tras 99 días de emergencia nacional.[827]</li>
<li class="list-group-item">El Gobierno de España concluye el último estado de alarma, terminado la desescalada y entrando todo el país en la 'nueva normalidad' tras 99 días de emergencia nacional.</li>
<li class="list-group-item">Mediodía: 246.272 contagiados, 28.323 muertos y 150.376 recuperados.[91]
Las comarcas Bajo Cinca, Cinca Medio y La Litera de Huesca retroceden a la fase 2 debido a los rebrotes de Zaidín y Binéfar.[828]
El Gobierno prorroga hasta el 30 de junio las restricciones de viajeros procedentes de la Unión Europea y en fronteras interiores con Portugal hasta el 30 de junio.[829] [830]
La comunidad de Madrid anuncia la reapertura de las escuelas infantiles con asistencia voluntaria para el 1 de julio.[831] Madrid plantea abrir las oficinas de empleo el 6 de julio.[832]
El sector de comercio pide flexibilizar los horarios comerciales para poder mitigar el impacto de la crisis sanitaria.[833]</li>
<li class="list-group-item">Mediodía: 246.504 contagiados, 28.324 muertos y 150.376 recuperados.[91]
El Gobierno anuncia confinamientos puntuales con la legislación sanitaria si surgen nuevos casos de rebrotes.[834]
El Ayuntamiento de Barcelona cierra cierra playas, parques y metro en la verbena de San Juan por el coronavirus.[835]
El Boletín Oficial del Estado publica las medidas de seguridad sanitaria que deberán adoptar todos los comercios y mercadillos en la denominada "nueva normalidad".[836]
Empiezan las pruebas de Selectividad (EvAU) en Navarra con medidas de seguridad para evitar contagios.[837]
El Banco de España aboga por prorrogar y adaptar los ertes y los créditos ICO.[838]
La 35ª edición de los Premios Goya se atrasa al 27 de febrero de 2021.[839]</li>
<li class="list-group-item">Tarde: 247.086 contagiados, 28.327 muertos y 150.376 recuperados.[91]
Surgen nuevos rebrotes de coronavirus en: Asturias, Huesca, Zaragoza, Valladolid, Navarra, Lleida, Girona, Cáceres, Badajoz, Las Palmas, Algeciras, Cádiz, Granada, Málaga, Coruña, Lugo, Murcia, Vizcaya, Vitoria y Valencia.[840]
El ministro de Sanidad, Salvador Illa, anuncia la elboración de un plan de preparación ante una posible segunda oleada del COVID-19. Sin embargo, afirma que el Gobierno "no tiene ninguna intención" de volver a utilizar el estado de alarma.[841] [842]
La Fiscalía archiva una denuncia de la Asociación el Defensor del Paciente que pedía investigar el fallecimiento de una persona en el Hospital Gómez Ulla de Madrid porque el protocolo del centro fue el "correcto" y la situación era de "excepcionalidad".[843]
El Ministerio de Trabajo, patronal y sindicatos finalizan una nueva reunión sin acuerdo para prorrogar los ERTEs hasta el 30 de septiembre.[844]
El Boletín Oficial del Estado publica un Real Decreto-ley en el que incluye las normas para los controles en aeropuertos y puertos.[845]
Un total de 44 residencias de Madrid están cerradas a visitas tras registrar nuevos casos de coronavirus.[846]
Las playas de Barcelona reabren tras el cierre por las noches de San Júan.[847]</li>
<li class="list-group-item">Mediodía: 247.086 contagiados, 28.327 muertos y 150.376 recuperados.[91]
El Congreso aprueba el decreto de 'nueva normalidad' con el apoyo de PP y Cs.[848]
El Juzgado de lo Social de Huesca condena al Gobierno de Aragón, al igual que lo hizo hace unas semanas el de Teruel, por haber vulnerado "derechos fundamentales" de los trabajadores sanitarios.[849]
El Ministerio de Seguridad Social, José Luis Escrivá, acuerda con las asociaciones de autónomos ATA, UPTA y Uatae prorrogar la prestación extraordinaria por cese de actividad más allá del 30 de junio.[850]
La Alianza Mundial para la Vacunación (GAVI), gana del Premio Princesa de Asturias de Cooperación 2020.[851]</li>
<li class="list-group-item">Mediodía: 247.486 contagiados, 28.330 muertos y 150.376 recuperados.[91]
El Consejo de Ministros aprueba la prórroga hasta septiembre de los ERTEs y de la prestación de autónomos.[852]
Un estudio de la Universidad de Barcelona afirma haber detectado la presencia de SARS-CoV-2 en aguas residuales de Barcelona recogidas en marzo de 2019.[853]</li>
<li class="list-group-item">Mediodía: 247.905 contagiados, 28.338 muertos y 150.376 recuperados.[91]
La presidenta del Senado, Pilar Llop, declara que el confinamiento ha aumentado las "tensiones" en el Parlamento.[854]
El Boletín Oficial del Estado publica el decreto que extiende los ERTE hasta el 30 de septiembre y mantiene las restricciones de entrada de cruceros.[855] [856]
Trabajadores del transporte sanitario convocados por UGT se manifestaron ante la Puerta del Sol pidiendo medidas de protección ante posibles rebrotes.[857]
La empresa Frutas La Espesa en Zaidín aplica un ERTE a 260 trabajadores con 200 afectados por el rebrote de COVID.[858]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"06","day":"28","year":"2020"},"end_date":{"mon1th":"06","day":"30","year":"2020"},"text":{"headline":"News Week 30","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 248.469 contagiados, 28.341 muertos y 150.376 recuperados.[91]
Primer día sin fallecidos por COVID-19 en Madrid tras 15 104 fallecidos registrados durante la pandemia.[859]
Se suspende la actividad de una empresa hortofrutícola de El Raal debido a siete nuevos casos de coronavirus procedentes de un vuelo de Bolivia en Murcia.[860]</li>
<li class="list-group-item">Mediodía: 248.770 contagiados, 28.343 muertos y 150.376 recuperados.[91]
El Boletín Oficial del Estado publica la creación de un registro telemático de apoyo psicológico para profesionales sanitarios.[861]
Sanidad no descarta una posible relación entre brotes en temporeros de Lleida y Huesca por la proximidad geográfica y las malas condiciones de los trabajadores.[862]
El Gobierno regional de Murcia plantea confinar varios municipios si empeora el brote por coronavirus originado por los tres pasajeros de un vuelo de Bolivia en Beniel, Santomera y Murcia.[863]
El Ilustre Colegio Oficial de Médicos de Madrid homenajea a los sanitarios fallecidos por coronavirus.[864]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"07","day":"01","year":"2020"},"end_date":{"mon1th":"07","day":"07","year":"2020"},"text":{"headline":"News Week 31","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 249.271 contagiados, 28.355 muertos y 150.376 recuperados.[91]
La OMS pone a España como ejemplo para contener el coronavirus. [868]</li>
<li class="list-group-item">Mediodía: 250.103 contagiados, 28.368 muertos y 150.376 recuperados [869]
El paro sube en 5.107 personas en junio hasta los 3.862.883 desempleados, aunque baja en todos los sectores menos en la agricultura y se reduce en 10 comunidades. [870]</li>
<li class="list-group-item">Mediodía: 250.545 contagiados, 28.385 muertos y 150.376 recuperados [91]
Muere el segundo niño que se ahogó en una playa de la localidad de Rosas (Gerona) debido a la ausencia de socorristas por la crisis del COVID-19.[871]
España entra en la lista de países cuyos turistas están exentos de cuarentena si viajan a Reino Unido.[872]</li>
<li class="list-group-item">No hay datos de contagio a nivel nacional.
Se decreta un confinamiento en la comarca catalana del Segrián, en la provincia de Lérida, debido al aumento de casos de la COVID-19 [873]</li>
<li class="list-group-item">No hay datos de contagio a nivel nacional.
La Junta de Galicia confina la comarca de La Marina de Lugo. [874]</li>
<li class="list-group-item">Mediodía: 251.789 contagiados, 28.388 muertos y 150.376 recuperados [875]
Se revelan los resultados del estudio de seroprevalencia, el primero del mundo. [876]
Por primera vez desde 1938, no hay fiestas de San Fermín ni chupinazo.</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"07","day":"07","year":"2020"},"end_date":{"mon1th":"07","day":"14","year":"2020"},"text":{"headline":"News Week 32","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 252.130 contagiados, 28.388 muertos y 150.376 recuperados [877]</li>
<li class="list-group-item">Mediodía: 252.513 contagiados, 28.396 muertos y 150.376 recuperados [91]
Se dobla el número de contagios en el día de hoy comparado con el de ayer.</li>
<li class="list-group-item">Mediodía: 253.056 contagiados, 28.401 muertos y 150.376 recuperados [91]
El ministro de Sanidad, Salvador Illa, no descarta un segundo confinamiento total. [878]</li>
<li class="list-group-item">Mediodía: 253.908 contagiados, 28.403 muertos y 150.376 recuperados [91]</li>
<li class="list-group-item">Mediodía: 255.953 contagiados, 28.406 muertos y 150.376 recuperados. [91]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"07","day":"14","year":"2020"},"end_date":{"mon1th":"07","day":"21","year":"2020"},"text":{"headline":"News Week 33","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 256.619 contagiados, 28.409 muertos y 150.376 recuperados. [91]
El presidente de la Generalidad de Cataluña, Quim Torra, promulga un nuevo decreto para confinar Lérida y 7 municipios de la comarca del Segrián domiciliariamente, que esta vez sí es convalidado por la Justicia y entra en vigor.</li>
<li class="list-group-item">Mediodía: 257.494 contagiados, 28.413 muertos y 150.376 recuperados. [91]</li>
<li class="list-group-item">Mediodía: 258.855 contagiados, 28.416 muertos y 150.376 recuperados. [91]
Homenaje de Estado a las víctimas de la COVID-19 en el Palacio Real.</li>
<li class="list-group-item">Mediodía: 260.255 contagiados, 28.420 muertos y 150.376 recuperados. [91]</li>
<li class="list-group-item">Se registran 628 contagios según los datos del Ministerio de Sanidad. Aragón con 252 casos, Catalunya con 121, Madrid con 40; Navarra, País vasco y Andalucía con 39.[882]</li>
<li class="list-group-item">Mediodía: 264.836 contagiados, 28.422 muertos y 150.376 recuperados. [91]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"07","day":"21","year":"2020"},"end_date":{"mon1th":"07","day":"28","year":"2020"},"text":{"headline":"News Week 34","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 266.194 contagiados, 28.424 muertos y 150.376 recuperados. [91]</li>
<li class="list-group-item">Mediodía: 267.551 contagiados, 28.426 muertos y 150.376 recuperados. [91]
El Gobierno de Navarra ha decidido implantar la fase 2 en el barrio de Mendillorri de Pamplona tras un rebrote 122 contagios.[883]</li>
<li class="list-group-item">Mediodía: 270.166 contagiados, 28.429 muertos y 150.376 recuperados. [91]
Se han comunicado 369 brotes, con 281 activos con más de 3.260 casos.[884]</li>
<li class="list-group-item">Mediodía: 272.421 contagiados, 28.432 muertos y 150.376 recuperados. [91]</li>
<li class="list-group-item">No hay datos debido a que el Ministerio de Sanidad no ofrece datos de la pandemia en fines de semana.</li>
<li class="list-group-item">No hay datos debido a que el Ministerio de Sanidad no ofrece datos de la pandemia en fines de semana.</li>
<li class="list-group-item">Mediodía: 278.782 contagiados, 28.434 muertos y 150.376 recuperados. [91]
Reino Unido ignora las propuestas de España y endurece sus medidas. [885]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"07","day":"28","year":"2020"},"end_date":{"mon1th":"07","day":"31","year":"2020"},"text":{"headline":"News Week 35","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 280.610 contagiados, 28.438 muertos y 150.376 recuperados. [91]
Alemania pide a sus ciudadanos que no hagan viajes turísticos a Cataluña, Aragón y Navarra por las cifras de contagio de la COVID-19. [886]
Madrid decreta el uso obligatorio de mascarillas y pone en marcha otras medidas como una cartilla COVID-19. [887]</li>
<li class="list-group-item">Mediodía: 282.641 contagiados, 28.438 muertos y 150.376 recuperados. [91]</li>
<li class="list-group-item">El Ministerio de Sanidad reconoce al Defensor del Pueblo que no existió “ningún comité de expertos encargado de la evaluación de la situación sanitaria" para dirigir la desescalada en España. Existieron otros dos comités que asesoraron al Ejecutivo durante la pandemia, pero no tuvieron responsabilidad en la desescalada.[888] [889]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"08","day":"01","year":"2020"},"end_date":{"mon1th":"08","day":"07","year":"2020"},"text":{"headline":"News Week 36","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.</li>
<li class="list-group-item">Cataluña declara 1.303 positivos.
Desde las 8 de la mañana, la Junta de Castilla y León confina Íscar y Pedrajas de San Esteban para frenar la trasmisión comunitaria del COVID-19. [890]</li>
<li class="list-group-item">Mediodía: 302.814 contagiados, 28.498 muertos y 150.376 recuperados. [91]</li>
<li class="list-group-item">Mediodía: 305.767 contagiados, 28.499 muertos y 150.376 recuperados. [91]
Galicia incluye a Madrid y saca a La Rioja y Portugal de la lista de territorios de obligado registro de viajeros. [891]</li>
<li class="list-group-item">Mediodía: 309.855 contagiados, 28.500 muertos y 150.376 recuperados. [91]
La Junta de Castilla y León confina el municipio de Aranda de Duero por 2 semanas tras detectarse 103 nuevos casos. [892]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"08","day":"07","year":"2020"},"end_date":{"mon1th":"08","day":"14","year":"2020"},"text":{"headline":"News Week 37","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 314.362 contagiados, 28.503 muertos y 150.376 recuperados. [91]
Se desconfina el barrio pamplonés de Mendillorri tras dos semanas en Fase 1.</li>
<li class="list-group-item">No se dan datos a nivel nacional debido a que el Ministerio de Sanidad no los ofrece en fines de semana.</li>
<li class="list-group-item">No se dan datos a nivel nacional debido a que el Ministerio de Sanidad no los ofrece en fines de semana.</li>
<li class="list-group-item">Mediodía: 322.980 contagiados, 28.576 muertos y 150.376 recuperados. [91]</li>
<li class="list-group-item">Mediodía: 326.612 contagiados, 28.581 muertos y 150.376 recuperados. [91]
Rusia registra la primera vacuna contra el Coronavirus en el mundo. [893]</li>
<li class="list-group-item">Mediodía: 329.784 contagiados, 28.579 muertos y 150.376 recuperados. [91]
Galicia prohíbe fumar en espacios públicos abiertos siempre y cuando no se pueda mantener la distancia de seguridad. [894]</li>
<li class="list-group-item">Mediodía: 337.334 contagiados, 28.605 muertos y 150.376 recuperados. [91]
Canarias prohíbe fumar en espacios abiertos e impone el uso de mascarilla. [895]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"08","day":"14","year":"2020"},"end_date":{"mon1th":"08","day":"21","year":"2020"},"text":{"headline":"News Week 38","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 342.813 contagiados, 28.605 muertos y 150.376 recuperados. [91]
El Ministerio de Sanidad ordena el cierre del ocio nocturno, limita la apertura de la hostelería y prohíbe fumar en la vía pública si no se puede mantener la distancia de seguridad. [896]</li>
<li class="list-group-item">No se dan datos a nivel nacional debido a que el Ministerio de Sanidad no los ofrece en fines de semana.</li>
<li class="list-group-item">No se dan datos a nivel nacional debido a que el Ministerio de Sanidad no los ofrece en fines de semana.
Se produce una manifestación negacionista de la COVID-19 y anti-mascarillas en la Plaza de Colón de Madrid, a la cual acuden 3.000 personas y a la cual Miguel Bosé dio su apoyo a través de Twitter. [897] [898]</li>
<li class="list-group-item">Mediodía: 359.082 contagiados, 28.646 muertos y 150.376 recuperados. [91]
España vuelve a entrar al Top 10 de países con más contagios en todo el mundo. [899]</li>
<li class="list-group-item">Mediodía: 364.196 contagiados, 28.646 muertos y 150.376 recuperados. [91]</li>
<li class="list-group-item">Mediodía: 370.867 contagiados, 28.797 muertos y 150.376 recuperados. [91]
En total se registran 3.715 nuevos positivos y 127 muertes en el día de hoy, lo que provoca que este sea el peor dato tras el fin del Estado de Alarma en España.
Confinan el municipio de Villamalea en Albacete. [900]</li>
<li class="list-group-item">Mediodía: 377.906 contagiados, 28.813 muertos y 150.376 recuperados. [91]
En total se registran 7.039 nuevos positivos y 16 muertes en el día de hoy, lo que provoca que este sea el peor dato tras el fin del Estado de Alarma en España.
La pandemia alcanza niveles parecidos al periodo de principios de Marzo o finales de abril.</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"08","day":"21","year":"2020"},"end_date":{"mon1th":"08","day":"28","year":"2020"},"text":{"headline":"News Week 39","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 386.054 contagiados, 28.838 muertos y 150.376 recuperados. [91]
La Agencia Española del Medicamento anuncia que el stock de Remdesivir se acabará en las próximas horas. [901]
Se levanta el confinamiento impuesto en Aranda de Duero. [902]
Cantalejo y Carrascal, en Castilla y León, confinados durante 14 días. [903]</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.
Un juez ratifica el confinamiento de Cantalejo y Carrascal. [904]</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.</li>
<li class="list-group-item">Mediodía: 405.436 contagiados, 28.872 muertos y 150.376 recuperados. [91]
Datos fin de Semana: 19.382 contagiados, 34 muertos, 0 recuperados.
Cataluña y la Región de Murcia imponen restricciones. En Cataluña, las reuniones se limitan a 10 personas, mientras que en Murcia serán de máximo 6, además de tomar otras medidas. [905]</li>
<li class="list-group-item">Mediodía: 412.553 contagiados, 28.924 muertos y 150.376 recuperados. [91]
Comparación día anterior: 7.117 contagiados, 52 muertos y 0 recuperados.
Isabel Díaz Ayuso anuncia las medidas para el inicio del curso en la Comunidad de Madrid, así como el Govern de Catalunya. [906] [907]
Bélgica prohíbe viajar a España por la segunda oleada de Coronavirus. [908]
En Andalucía, Jesús Aguirre declara que la segunda ola se ha adelantado y que Andalucía ya la padece. [909]
Comparece en rueda de prensa el Presidente del Gobierno, Pedro Sánchez. Ofrece a las CCAA aplicar el Estado de Alarma en sus territorios, rastreadores del Ejército entre otras medidas. [910]</li>
<li class="list-group-item">Mediodía: 419.849 contagiados, 28.971 muertos y 150.376 recuperados. [91]
Comparación día anterior: 7.296 contagiados, 47 muertos y 0 recuperados.
Madrid pide a los ciudadanos de los barrios del sur de la capital que no salgan de casa. [911]
Salvador Illa prevé que España cuente con la vacuna en diciembre. [912]</li>
<li class="list-group-item">Mediodía: 429.507 contagiados, 28.996 muertos y 150.376 recuperados. [91]
Comparación día anterior: 9.658 contagiados, 25 muertos y 0 recuperados.
El Gobierno y las Comunidades Autónomas acuerdan medidas para la vuelta al cole del curso escolar 2020-21. [913]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"08","day":"28","year":"2020"},"end_date":{"mon1th":"08","day":"31","year":"2020"},"text":{"headline":"News Week 40","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 439.286 contagiados, 29.011 muertos y 150.376 recuperados. [91]
Comparación día anterior: 9.779 contagiados, 15 muertos y 0 recuperados.
Es la peor semana en datos de contagios desde Marzo.</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.
El Ministerio de Sanidad autoriza la prueba de la vacuna belga de Johnson&Johnson en 3 hospitales de España: 2 en Madrid y 1 en Santander. Se vacunará a 190 personas entre el 14 y el 22 de septiembre. [914]</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"09","day":"01","year":"2020"},"end_date":{"mon1th":"09","day":"07","year":"2020"},"text":{"headline":"News Week 41","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 470.973 contagiados, 29.152 muertos y 150.376 recuperados. [91]
Comparación día anterior: 8.115 contagiados, 58 muertos y 0 recuperados.
Valladolid y Salamanca vuelven a la "Fase 1". [918]</li>
<li class="list-group-item">Mediodía: 479.554 contagiados, 29.194 muertos y 150.376 recuperados. [91]
Comparación día anterior: 8.581 contagiados, 42 muertos y 0 recuperados.
El Presidente del Gobierno, Pedro Sánchez, empieza la Ronda de Consultas con los presidentes de los partidos políticos para intentar llegar a acuerdos en distintas materias, entre ellas la sanitaria. [919]
Se detecta un brote en un hospital de Reus con 26 contagiados. [920]
El paro vuelve a subir a causa de los efectos de la pandemia. [921]
La Comunidad de Madrid y Navarra se suman a la aplicación Radar COVID. [922]
El Gobierno de Cantabria confina Santoña por 14 días. [923]
La localidad extremeña de Llera queda aislada socialmente y vuelve a Fase 2. [924]</li>
<li class="list-group-item">Mediodía: 488.513 contagiados, 29.234 muertos y 150.376 recuperados. [91]
Comparación día anterior: 8.959 contagiados, 40 muertos y 0 recuperados.
Aragón volverá a retomar la nueva normalidad mañana. [925]
Andalucía prevé iniciar la vacunación a finales de año o principios del que viene. [926]</li>
<li class="list-group-item">Mediodía: 498.989 contagiados, 29.418 muertos y 150.376 recuperados. [91]
Comparación día anterior: 10.476 contagiados, 184 muertos y 0 recuperados.
La Comunidad de Madrid toma nuevas medidas para frenar la expansión del virus en la segunda ola. [927]</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"09","day":"07","year":"2020"},"end_date":{"mon1th":"09","day":"14","year":"2020"},"text":{"headline":"News Week 42","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 525.549 contagiados, 29.516 muertos y 150.376 recuperados. [91]
Datos fin de semana: 26.560 contagiados, 98 muertos y 0 recuperados.
Empieza la vuelta al cole en 5 Comunidades Autónomas.
Isabel Díaz Ayuso, Emiliano García-Page y Alfonso Fernández Mañueco, presidentes autonómicos de Madrid, Castilla-La Mancha y Castilla y León para tomar medidas coordinadas frente a la COVID-19. [928]
El Gobierno confía en empezar la vacunación en diciembre de este mismo año. [929]</li>
<li class="list-group-item">Mediodía: 534.513 contagiados, 29.594 muertos y 150.376 recuperados. [91]
Comparación día anterior: 8.964 contagiados, 78 muertos y 0 recuperados.
Se confina el municipio riojano de Alfaro. [930]
Según la Junta de Andalucía, en la provincia de Málaga hay trasmisión comunitaria de la COVID-19. [931]</li>
<li class="list-group-item">Mediodía: 543.379 contagiados, 29.628 muertos y 150.376 recuperados. [91]
Comparación día anterior: 8.866 contagiados, 34 muertos y 0 recuperados.</li>
<li class="list-group-item">Mediodía: 554.143 contagiados, 29.699 muertos y 150.376 recuperados. [91]
Comparación día anterior: 10.764 contagiados, 71 muertos y 0 recuperados.
Jumilla vuelve a Fase 1 flexibilizada, lo que significa que se confina. [932]</li>
<li class="list-group-item">Mediodía: 566.326 contagiados, 29.747 muertos y 150.376 recuperados. [91]
Comparación día anterior: 12.183 contagiados, 48 muertos y 0 recuperados.
Peor día en cuanto a cifras de contagios desde el inicio de la pandemia.
Empiezan a trabajar los rastreadores militares en la Comunidad de Madrid y la Comunitat Valenciana. [933]</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.
Según el diario ABC, habría en España 53.788 muertos por la COVID-19.</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"09","day":"14","year":"2020"},"end_date":{"mon1th":"09","day":"21","year":"2020"},"text":{"headline":"News Week 43","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 593.730 contagiados, 29.848 / 53.889 muertos y 140.323 hospitalizados, 12.803 en UCI. [91]
Datos fin de semana: 27.404 contagiados y 101 muertos.
Empieza en el hospital cántabro de Valdecilla las pruebas de la vacuna Janssen. [934]</li>
<li class="list-group-item">Mediodía: 603.167 contagiados, 30.004 / 54.045 muertos y 140.999 hospitalizados, 12.868 en UCI. [91]
Comparación día anterior: 9.437 contagiados, 156 muertos y 676 hospitalizados, 65 más en UCI.
La fiscalía pide al Supremo archivar las querellas presentadas contra el Gobierno por la gestión del COVID-19. [935]</li>
<li class="list-group-item">Mediodía: 614.360 contagiados, 30.243 / 54.284 muertos y 141.603 hospitalizados, 12.904 en UCI. [91]
Comparación día anterior: 11.193 contagiados, 239 muertos y 604 hospitalizados, 36 más en UCI.
El Banco de España rechaza una recuperación temprana y corrige sus previsiones al próximo año. [936]</li>
<li class="list-group-item">Mediodía: 625.651 contagiados, 30.405 / 54.446 muertos y 142.252 hospitalizados, 12.937 en UCI. [91]
Comparación día anterior: 11.291 contagiados, 162 muertos y 649 hospitalizados, 33 más en UCI.
Fernando Simón vuelve de sus vacaciones en Mallorca tras grabar un episodio de Planeta Calleja.</li>
<li class="list-group-item">Mediodía: 640.040 contagiados, 30.495 / 54.536 muertos y 142.915 hospitalizados, 12.980 en UCI. [91]
Comparación día anterior: 14.389 contagiados, 90 muertos y 663 hospitalizados, 43 más en UCI.
Peor día respecto al número de contagiados, marcando un nuevo récord.
Pedro Sánchez e Isabel Díaz Ayuso se reunirán el Lunes para tratar la situación en Madrid. [937]
Asturias declara la alerta naranja por COVID en Laviana. [938]
Castilla-La Mancha aprueba restricciones en Almagro, Calzada de Calatrava, Villahermosa y Campo de Criptana. [939]
Madrid aprueba restricciones en 37 áreas y aprueba limitar las reuniones en toda la Comunidad a 6 personas [940]</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"09","day":"21","year":"2020"},"end_date":{"mon1th":"09","day":"28","year":"2020"},"text":{"headline":"News Week 44","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 671.468 contagiados, 30.663 / 54.704 muertos y 144.269 hospitalizados, 13.068 de ellos en UCI. [91]
Datos fin de semana: 31.428 contagiados, 168 fallecimientos y 1.354 hospitalizaciones, 88 más en las UCI.
El consejero de Sanidad de Madrid, Enrique Ruiz Escudero, anuncia que el hospital podría reabrirse debido a los nuevos rebrotes en Madrid, señalando la necesidad de "voluntarios de hospitales" por el imprevisto.[941] [942]
Se reúnen el Presidente del Gobierno, Pedro Sánchez y la Presidenta de la Comunidad de Madrid, Isabel Díaz Ayuso, para tratar el estado de la pandemia en Madrid.</li>
<li class="list-group-item">Mediodía: 682.267 contagiados, 30.904 / 54.945 muertos y 145.008 hospitalizados, 13.112 de ellos en UCI. [91]
Comparación día anterior: 10.799 contagiados, 241 fallecimientos y 739 hospitalizaciones, 44 más en las UCI.´
Madrid no descarta ampliar las restricciones a otras zonas básicas de salud.
Un niño de 12 años es ingresado grave en el hospital Vall d'Hebron sin patologías previas.
Se reduce la cuarentena de 14 a 10 días.</li>
<li class="list-group-item">Mediodía: 693.556 contagiados, 31.034 / 55.075 muertos y 145.786 hospitalizados, 13.195 de ellos en UCI. [91]
Comparación día anterior: 11.289 contagiados, 130 fallecimientos y 778 hospitalizados, 83 más en UCI.
Un virólogo alemán advierte de que la COVID no ha hecho más que empezar y que "la pandemia de verdad llega ahora". [943]</li>
<li class="list-group-item">Mediodía: 704.209 contagiados, 31.118 / 55.159 muertos y 11.041 hospitalizados a día de hoy, 1.445 de ellos en UCI. [91]
Comparación día anterior: 10.663 contagiados, 84 fallecimientos.</li>
<li class="list-group-item">Mediodía: 716.481 contagiados, 31.232 / 55.273 muertos y 11.006 hospitalizados a día de hoy, 1.465 de ellos en UCI. [91]
Comparación día anterior: 12.272 contagiados, 114 fallecimientos, 35 hospitalizados menos, 20 más en UCI.</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"09","day":"28","year":"2020"},"end_date":{"mon1th":"09","day":"30","year":"2020"},"text":{"headline":"News Week 45","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 748.266 contagiados, 31.411 / 55.452 muertos y 11.147 hospitalizados a día de hoy, 1.529 de ellos en UCI. [91]
Datos fin de semana: 31.785 contagiados, 179 fallecimientos y 141 hospitalizados, 64 más en UCI.</li>
<li class="list-group-item">Mediodía: 758.172 contagiados, 31.614 / 55.655 muertos y 10.941 hospitalizados a día de hoy, 1.535 de ellos en UCI. [91]
Comparación día anterior: 9.906 contagiados, 203 fallecimientos y 200 hospitalizados menos, 6 más en UCI.
La Junta de Andalucía confina Casariche y toma más medidas ante el aumento de contagios. [944]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"10","day":"01","year":"2020"},"end_date":{"mon1th":"10","day":"07","year":"2020"},"text":{"headline":"News Week 46","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 778.607 contagiados, 31.973 / 55.984 muertos y 10.559 hospitalizados, 1.561 en UCI. [91]
Comparación día anterior: 9.419 contagiados, 182 fallecimientos y 296 hospitalizados menos, 22 más en UCI.
Isabel Díaz Ayuso recurrirá en los tribunales la orden publicada en el BOE en la que se establecen nuevas restricciones en la Comunidad de Madrid. [946]</li>
<li class="list-group-item">Mediodía: 789.932 contagiados, 32.086 / 56.097 muertos y 10.372 hospitalizados, 1.566 en UCI. [91]
Comparación día anterior: 11.325 contagiados, 113 fallecimientos y 187 hospitalizados menos.</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.
Navarra supera a Madrid en incidencia acumulada. [947]</li>
<li class="list-group-item">No hay datos a nivel nacional debido a que el ministerio de Sanidad no da datos en fines de semana.
La Playa de la Patacona en Valencia amanece con 53.000 banderas de España en homenaje a los fallecidos por la pandemia. [948]</li>
<li class="list-group-item">Mediodía: 813.412 contagiados, 32.225 / 56.236 muertos y 10.949 hospitalizados, 1.580 en UCI. [91]
Comparación datos fin de semana: 23.480 contagiados, 139 fallecimientos y 577 hospitalizados menos, 14 más en UCI.
La Junta de Castilla y León aplica restricciones en León y Palencia por su alta tasa de incidencia. [949]</li>
<li class="list-group-item">Mediodía: 825.838 contagiados, 32.486 / 56.497 muertos y 10.696 hospitalizados, 1.544 en UCI. [91]
Comparación datos día anterior: 12.426 contagiados, 261 fallecimientos y 253 hospitalizados menos, 36 menos en UCI.
La Junta de Andalucía confina Linares y Almodóvar del Río por la alta incidencia de la pandemia en las localidades. [950]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"10","day":"07","year":"2020"},"end_date":{"mon1th":"10","day":"14","year":"2020"},"text":{"headline":"News Week 47","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
<li class="list-group-item">Mediodía: 835.901 contagiados, 32.562 / 56.573 muertos y 10.662 hospitalizados, 1.568 en UCI. [91]
Comparación día anterior: 10.491 contagiados, 76 fallecimientos y 34 hospitalizados menos, 24 más en UCI.
Pedro Sánchez presenta el "Plan de Recuperación, Transformación y Resiliencia de la Economía Española". [951]</li>
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"10","day":"14","year":"2020"},"end_date":{"mon1th":"10","day":"21","year":"2020"},"text":{"headline":"News Week 48","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"10","day":"21","year":"2020"},"end_date":{"mon1th":"10","day":"28","year":"2020"},"text":{"headline":"News Week 49","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"10","day":"28","year":"2020"},"end_date":{"mon1th":"10","day":"31","year":"2020"},"text":{"headline":"News Week 50","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"11","day":"01","year":"2020"},"end_date":{"mon1th":"11","day":"07","year":"2020"},"text":{"headline":"News Week 51","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"11","day":"07","year":"2020"},"end_date":{"mon1th":"11","day":"14","year":"2020"},"text":{"headline":"News Week 52","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"11","day":"14","year":"2020"},"end_date":{"mon1th":"11","day":"21","year":"2020"},"text":{"headline":"News Week 53","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"11","day":"21","year":"2020"},"end_date":{"mon1th":"11","day":"28","year":"2020"},"text":{"headline":"News Week 54","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"11","day":"28","year":"2020"},"end_date":{"mon1th":"11","day":"30","year":"2020"},"text":{"headline":"News Week 55","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"12","day":"01","year":"2020"},"end_date":{"mon1th":"12","day":"07","year":"2020"},"text":{"headline":"News Week 56","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"12","day":"07","year":"2020"},"end_date":{"mon1th":"12","day":"14","year":"2020"},"text":{"headline":"News Week 57","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"12","day":"14","year":"2020"},"end_date":{"mon1th":"12","day":"21","year":"2020"},"text":{"headline":"News Week 58","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"12","day":"21","year":"2020"},"end_date":{"mon1th":"12","day":"28","year":"2020"},"text":{"headline":"News Week 59","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},},{"start_date":{"month":"12","day":"28","year":"2020"},"end_date":{"mon1th":"12","day":"31","year":"2020"},"text":{"headline":"News Week 60","text":`<div class="row mr-auto ml-auto">
<ul class="list-group">
</ul><\div>`},"background":{"color":"#0084b4"},}    
        ]
    }
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
    timeline = new TL.Timeline('timeline-embed', myjson, additionalOptions);
}

function loadWordClouds(id){
    // var word_arrays = [
    //     {text: "AAAAA", weight: 3, html: {class: "Topic1"}},
    //     {text: "BBBBB", weight: 2, html: {class: "Topic2"}},
    //     {text: "CCCCC", weight: 1, html: {class: "category credit"}},
    //     {text: "DDDDD", weight: 0.1, html: {class: "category credit"}},
    // //    {text: "Lorem", weight: 0.1, link: 'http://github.com/mistic100/jQCloud'},
    // //   {text: "Ipsum", weight: 0.2, link: 'http://www.strangeplanet.fr'},
    // //   {text: "Dolor", weight: 0.3, link: 'http://piwigo.org'},
    //   ];

     var node = $(id)
      var checkExist = setInterval(function() {
        if (node.length) {
            var word_arrays
            //  alert(id.replace('#','').replaceAll('-','_').replaceAll(0, -1))
            eval("word_arrays = " + id.replaceAll('#','').replaceAll('-','_').slice(0, -1))
            var topicLetter = id.slice(-1)
            node.jQCloud(word_arrays[topicLetter], {
                // autoResize: true,
                // height: $('#word-cloud').parent().height(),
                fontSize: function (width, height, step) {
                    if (step == 1)
                       return width * 0.02 * step + 'px';
                
                    return width * 0.01 * step + 'px';
                  },
                  delayedMode: false, 
                  autoResize: true, 
                  height: node.parent("div").height(), 
                  width: node.parent("div").width(),
                  colors: ['#c0deed','#c8c0ed','#c0edcf'],
            
            });
            //     width: $('#word-cloud').parent().width(),
            //     height: $('#word-cloud').parent().height(),
                
            //     shape: 'elliptic',
            //     removeOverflowing:true,
            //     afterCloudRender: function() {
            //       $('#word-cloud > span').on('click', function(e){
            //         e.preventDefault();
            //         console.log(e.target.innerHTML);
            //         $('.detailed-tags').prepend("<div class='tag'>" + e.target.innerHTML + "</div>")
            //       });
            //     }
              
           clearInterval(checkExist);
        }
     }, 100); // check every 100ms

     
}
// $(".topic-circle").click(function(){
//     $('#myModal').modal('toggle');
//     alert( "Handler for .click() called." );
// })


var clusters = ["A","B","C","D","E"]
$(window).resize(function(){
    // $('#event-week-1A').jQCloud('destroy');
    // loadWordClouds("#event-week-1A")
    // console.log("hola")
    generateClouds()
    // $('#word-cloud').jQCloud('update', word_arrays);
})
var currentLocation = document.location.hash;
 function main(){
    createTimeline()
    $(document).ready(function(){
        if(currentLocation != "event-covid-19-timeline-in-spainbr-2020-2021")
            generateClouds()
        

            $(".topic-circle").on('click', function(event){
                event.stopPropagation();
                event.stopImmediatePropagation();
                
                tmp = $(this).children().attr("id")
                generateTweets(tmp)
                //(... rest of your JS code)
                
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
    // alert( week + ":" + cluster + ":"+obj);

    var word_arrays
    //  alert(id.replace('#','').replaceAll('-','_').replaceAll(0, -1))
    // console.log(obj)
    eval("word_arrays = " + obj)
    // console.log(word_arrays["T"+cluster])
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
    // $(".modal-body").html("").html(`Oigan a este! los abuelos deberian estar dispuestos a MORIRSE en vez de dejar que se afecte la economia americana. Que lo hagan por sus nietos. NO! Las vidas humanas estan primero! Y estos son los Republicanos Pro-vida! En contra del aborto, pero matar ancianos, ok. #coronavirus https://t.co/fWWil5FXHc`)
    $('#myModal').modal('toggle');

}
function generateClouds(){
    clusters.forEach(element => {
        $(currentLocation+element).jQCloud('destroy');
     });
     clusters.forEach(element => {
        loadWordClouds(document.location.hash+element)
     });
     currentLocation = document.location.hash;
}