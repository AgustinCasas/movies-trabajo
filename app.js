const express = require ('express');
const app = express();
const moviesRouter = require('./routes/movies');
const path = require('path');

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(3010,function(){
    console.log('running on 3010');
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/movies' , moviesRouter);

module.exports = app;