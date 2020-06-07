const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Movie = db.Movie;

const moviesController = {
    //index : function (req ,res){
        //sequelize.query('SELECT * FROM movies')
        //.then(function(results){
            //let moviesAll = results[0]

            //return res.send(moviesAll); //Chequear si llegan los datos
            //return res.render('movies', {moviesAll});
        //});
        
        
    //},
    index: function(req, res){
        Movie.finAll()
        .then(function(results){
            let moviesAll = results;
            
            return res.render('movies', {moviesAll});
        })
        

    },

}

module.exports = moviesController;