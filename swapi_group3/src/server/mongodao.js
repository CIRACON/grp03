let mongodb = require("mongodb");
//const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

let swapiDB;
let films;
let planets;
let people;
mongodb.MongoClient.connect(url, (err, db) => {
    if (err || !db) {
        console.log("Not working bud");
    } else {
        swapiDB = db.db("swapidb");
        films = swapiDB.collection("films");
        planets = swapiDB.collection("planets");
        people = swapiDB.collection("people");
        console.log("Successfully connected to SwapiDB in Mongo");
    }
});


module.exports.getAllFilms = function (callback) {
    films.find().toArray((err, result) => {
        if (err) {
            callback("Failed to find films", undefined);
        } else {
            callback(undefined, result);
        }
    });
};

module.exports.getAllPlanets = (callback) => {
    planets.find().toArray((err, result) => {
        if (err) {
            callback("Failed to find planets", undefined);
        } else {
            callback(undefined, result);
        }
    })
}
module.exports.getAllPeople = (callback) => {
    people.find().toArray((err, result) => {
        if (err) {
            callback("Failed to find people", undefined);
        } else {
            callback(undefined, result);
        }
    })
}
let index = 1;
module.exports.getOneFilm = (filmID, callback) => {
    index = parseInt(filmID);
    films.find({pk: index}).toArray((err, result) => {
        if (err) {
            callback("Failed to find film", undefined);
        } else {
            console.log(result);
            callback(undefined, result);
        }
    });
}

module.exports.getOnePlanet = (planetID, callback) => {
    index = parseInt(planetID);
    planets.find({pk: index}).toArray((err, result) => {
        if (err) {
            callback("Failed to find planet", undefined);
        } else {
            callback(undefined, result);
        }
    });
}

module.exports.getOnePeople = (personID, callback) => {
    index = parseInt(personID);
    people.find({pk: index}).toArray((err, result) => {
        if (err) {
            callback("Failed to find person", undefined);
        } else {
            callback(undefined, result);
        }
    });
}