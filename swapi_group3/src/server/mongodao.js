let mongodb = require("mongodb");
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

let swapiDB;
let films;
let planets;
mongodb.MongoClient.connect(url, (err, db) => {
    if (err || !db) {
        console.log("Not working bud");
    } else {
        swapiDB = db.db("swapidb");
        films = swapiDB.collection("films");
        planets = swapiDB.collection("planets");
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
            callback("Failed to find films", undefined);
        } else {
            callback(undefined, result);
        }
    })
}