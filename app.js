// Servidor
const express = require('express')

// Variables de entorno
require('dotenv').config();

// Vistas parciales
const hbs = require('hbs');

// Constante servidor
const app = express()
// Puerta de enlace
const port = process.env.PORT;


// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


// Servir contenido estatico
app.use( express.static('public'));

// 
app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Mauricio Mora',
        titulo: 'Curso de node.JS'
    });
});

// 
app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Mauricio Mora',
        titulo: 'Curso de node.JS'
    });
});

// 
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Mauricio Mora',
        titulo: 'Curso de node.JS'
    });
});

app.get('/elements', function (req, res) {
    res.sendFile( __dirname + '/public/elements.html')
});

app.get('/generic', function (req, res) {
    res.sendFile( __dirname + '/public/generic.html')
});



app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/back/404.html')
});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});