const express = require("express");
const cors = require('cors');
const dao = require("./mongodao");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/films", (req, res) => {
    dao.getAllFilms((err, films) => {
        if(films) {
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
          console.log(film);
          res.send(film[0]);
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
          res.send(planet[0]);
        } else {
          res.statusCode = 404;
          res.end();
        }
    });
});

const port = 5000;
console.log("Server listening on port 5000...");
app.listen(port);