var jsonData = require("../db/db.json");
const { json } = require("express");

module.exports = function(app) {
    
    app.get("/api/notes", function(req, res) {
        // return db.json file and return saved notes as JSON
        console.log(jsonData);
        console.log("-----------------------");
        if (jsonData.length === 0){
            console.log("No notes");
            res.send("No notes");
        } else {
            res.json(jsonData);
        }
      });

    app.post("/api/notes", function(req, res) {
        // take in JSON 
        var newNote = req.body
        jsonData.push(newNote);
        console.log(newNote);
        console.log("-----------------------");
        res.json(true);

        // add it to the db.json file
        // return new note to the client
    });

    app.delete("/api/notes/:id", function(req, res) {
        // receive query parameter containing id of note to delete
        // need to read all notes from db.json file
        // remove the note with unique ID that matches
        // rewrite the nates to db.json file
    });
};