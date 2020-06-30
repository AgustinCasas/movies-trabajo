module.exports = (sequelize,dataTypes) => {
    let alias = 'Movie'
    let cols = {

        title: dataTypes.STRING,

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,

        rating: dataTypes.INTEGER,
    
        awards: dataTypes.INTEGER,
        
        length: dataTypes.INTEGER,
        
        releaseDate: dataTypes.DATE
        
    };
    const config = {
        timestamp: false
    };
    const Movie = sequelize.define(alias, cols, config);
        return Movie;
}