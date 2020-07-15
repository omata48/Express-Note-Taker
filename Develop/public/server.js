// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA
// =============================================================
// db.json contains information from notes

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

// Get notes from DB
app.get("/api/notes", function(req, res) {
  // return db.json file and return saved notes as JSON
});

// Create New Notes - takes in JSON input
app.post("/api/notes", function(req, res) {
    // take in JSON 
    // add unique ID to each note
    // add it to the db.json file
    // return new note to the client
});

// Delete Note - 
app.delete("/api/notes/:id", function(req, res) {
    // receive query parameter containing id of note to delete
    // need to read all notes from db.json file
    // remove the note with unique ID that matches
    // rewrite the nates to db.json file
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
