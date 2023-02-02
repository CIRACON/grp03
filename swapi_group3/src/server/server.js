const express = require("express");
const dao = require("./mongodao");
const app = express();

app.use(express.json());

app.get("/films", (req, res) => {
    dao.getAllFilms((err, films) => {
        if(films) {
            console.log(films);
            res.send(films);
        } else {
            res.statusCode = 500;
            res.end();
        }
    });
});

app.get("/planets", (req, res) => {
    dao.getAllPlanets((err, planets) => {
        if(planets) {
            console.log(planets);
            res.send(planets);
        } else {
            res.statusCode = 500;
            res.end();
        }
    });
});

app.get("/films/:filmID", (req, res) => {
    dao.getOneFilm(req.params.filmID, (err, film) => {
        if (film) {
          console.log("GET single film: " +  req.params.filmID );
          res.send(film);
        } else {
          res.statusCode = 404;
          res.end();
        }
    });
});

app.get("/planets/:planetID", (req, res) => {
    dao.getOnePlanet(req.params.planetID, (err, planet) => {
        if (planet) {
          console.log("GET single planet: " +  req.params.planetID );
          res.send(planet);
        } else {
          res.statusCode = 404;
          res.end();
        }
    });
});

const port = 5000;
console.log("Server listening on port 5000...");
app.listen(port);