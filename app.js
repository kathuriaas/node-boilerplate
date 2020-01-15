const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const dotenv = require('dotenv');
const favicon = require('serve-favicon');

//Initilize app
const app = express();

//Read environment variables from .env
dotenv.config();

//Load view engine
app.engine('handlebars',exphbs());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','handlebars');

//Load static path for file search
app.use(express.static(path.join(__dirname,'public')));

//Load static path for client side javascripts search
app.use(express.static(path.join(__dirname,'client-controllers')));

//Import and Load routes
const routes = require('./routes/router.js');
app.use('/',routes);

//Use Favicon
app.use(favicon(__dirname + '/public/favicon.ico'));

//Start server
app.listen(process.env.PORT, function(){
	console.log('server started on port ' + process.env.PORT);
});