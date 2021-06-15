// Express
import express from 'express';

// WebSocket
import * as http from 'http';

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

const jwt = require("jsonwebtoken");
// Express
const app = express();


// Mids
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.use(cors());
app.use(morgan('dev'));
app.use(routes);

const server = http.createServer(app);
var url = require('url');
server.listen(80, function () {
    console.log("Server ready!");
});
