const express = require ('express');
const app = express();
const moviesRouter = require('./routes/movies');

//template engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.listen(300,function(){
    console.log('running on 3000');
});


//rutas
app.use('/' , moviesRouter);

module.exports = app;