



// Cluster
import cluster from 'cluster';
import os from 'os';

// Express
import express from 'express';

// WebSocket
//import * as http from 'http';
import * as http from 'http';
import WebSocket from 'ws';

// Mongoose
import mongoose from 'mongoose';
import mongoConfig from './config/mongo';
mongoose.connect(mongoConfig.url, mongoConfig.configs);
mongoose.set('useFindAndModify', false);

// Mids
import cors from 'cors';
import morgan, { format } from 'morgan';

// Routes
import routes from './routes';
// import User from './models/User';
// import userController from './controllers/user.controller';
// import Slot from './models/Slot';

const jwt = require("jsonwebtoken");
//Constructors 
import * as contructor from './config/constructors'
//Pages
import * as userController from './controllers/user.controller';
// Express
const app = express();


// Mids
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
// Bootstrap 4 y librerías necesarias
// app.use('/css', express.static(__dirname + '/public/bootstrap/assets/css'));
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
// app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.use(cors());
app.use(morgan('dev'));
app.use(routes);


// if (cluster.isMaster) {
//     const numCPUs = os.cpus().length;
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork()
//     }
// } else {
//app.listen(process.env.HTTP_PORT || 3333);
// }





const server = http.createServer(app);

var url = require('url');



// var server = http.createServer(function (request: any, response: any) {
//     console.log("REQUEST: " + request.url);
//     var url_info = url.parse(request.url, true); //all the request info is here
//     var pathname = url_info.pathname; //the address
//     var params = url_info.query; //the parameters
//     response.end("OK!"); //send a response
// });

server.listen(5000, function () {
    console.log("Server ready!");
});

var WebSocketServer = require('websocket').server;
var wsServer = new WebSocketServer({ // create the server
    httpServer: server //if we already have our HTTPServer in server variable...
});

var user = null;

wsServer.on('request', function (request: any) {
    var connection = request.accept(null, request.origin);
    console.log("NEW USER");

    connection.on('message', function (message: any) {

        if (message.type === 'utf8') {
            console.log("NEW MSG: " + message.utf8Data); // process WebSocket message
            //console.log(rooms);
            var incomingMessage = JSON.parse(message.utf8Data);
            jwt.verify(incomingMessage.token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, user: any) => {
                //console.log(err)
                if (err) {
                    userController.sendUnauth(connection);
                    //return res.sendStatus(403)
                } else {
                    switch (incomingMessage.type) {
                        case "roleRequest":
                            userController.sendRole(connection,incomingMessage.token);
                            break;
                        default:
                            break;
                    }
                }
            })


        }
    });

    connection.on('close', function (connection: any) {

        console.log("USER IS GONE");// close user connection
    });
});
