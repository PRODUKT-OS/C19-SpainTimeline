
function msgObj(type, msg, token) {
    var msg = {
        type: type,
        content: msg,
        token: token
    }
    return msg;
}

var connection;
var role;

function connect() {


    connection = new WebSocket("ws://localhost:80");



    connection.onopen = function () {

        console.log("Socket has been opened!");
        var msg = msgObj("roleRequest","",getCookie("token"))
        connection.send(JSON.stringify(msg));
        
        // switch (window.location.pathname) {
        //     case "/slots":
        //         var msg = msgObj("slotsRequest", "", getCookie("token"));
        //         var msg2 = msgObj("modelsRequest", "", getCookie("token"));
        //         var msg3 = msgObj("casinosRequest", "", getCookie("token"));
        //         connection.send(JSON.stringify(msg));
        //         connection.send(JSON.stringify(msg2));
        //         connection.send(JSON.stringify(msg3));
        //         break;

        //     case "/casinos":
        //         var msg = msgObj("casinosRequest", "", getCookie("token"));
        //         connection.send(JSON.stringify(msg));
        //         break;

        //     case "/timeline":
        //         var msg = msgObj("statisticsRequest", "", "1234");
        //         connection.send(JSON.stringify(msg));
        //         break;

        //     case "/alerts":
        //         var msg = msgObj("alertsRequest", "", getCookie("token"));
        //         connection.send(JSON.stringify(msg));
        //         break;

        //     default:
        //         break;
        // }
    };


    connection.addEventListener("close", function (e) {
        console.log("Socket has been closed: ", e);

    });

    connection.onmessage = function (msg) {

        var message = JSON.parse(msg.data);
        
        console.log("MESSAGE RECIEVED: \n")
        console.log(message.content);

        switch (message.type) { //al recibir un mensaje de texto
            case 'tableResponse':
                RenderSlots(message);
                break;
            case 'modelsResponse':
                RenderModels(message);
                break;
            case 'casinosResponse':
                RenderCasinos(message);
                break;
            case 'alertsResponse':
                RenderAlerts(message);
                break;
            case 'roleResponse':
                role = message.content;
                // offuscateHTML();
                 main(); 
                break;
            case 'unauth':
                break;
            case 'statisticsResponse':
                RenderStatistics(message);
                break;

            default:
                break;
        }

        connection.onerror = function (err) {
            console.log("error: ", err);
        };

    }
};

window.onload = function () {
    connect();
};

var delete_cookie = function (name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}


$("#logout-button").on("click", function () {

    delete_cookie('token');
    window.location.href = "/login"

});
