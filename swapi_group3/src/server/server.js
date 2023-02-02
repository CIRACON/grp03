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
    })
});

const port = 5000;
console.log("Server listening on port 5000...");
app.listen(port);