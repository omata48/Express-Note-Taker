var jsonData = require("../db/db.json");
const { json } = require("express");

module.exports = function(app) {
    
    app.get("/api/notes", function(req, res) {
        // return db.json file and return saved notes as JSON
        res.json(jsonData);
      });

    app.post("/api/notes", function(req, res) {
        // take in JSON 
        // add it to the db.json file
        // return new note to the client
        var newNote = req.body
        newNote.id = Math.floor(Math.random()*1000)
        jsonData.push(newNote);
        res.json(true);

    });

    app.delete("/api/notes/:id", function(req, res) {
        // receive query parameter containing id of note to delete
        // compare with notes from db.json file
        // remove the note with unique ID that matches (splice)

        // console.log(req.url);
        // console.log(req.params.id)
        let chosen = req.params.id; 
        // console.log(jsonData[0].id)

        for (var i = 0; i < jsonData.length; i++) {
            // similar comparison b/c chose is string
            if (chosen == jsonData[i].id) {
                jsonData.splice(i,1);
                break;
            }
        }
        res.json(true)
    });
};