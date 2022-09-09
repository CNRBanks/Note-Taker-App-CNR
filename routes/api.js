const router = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtil");

router.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.post("/notes", (req, res) => {
  const { title, text } = req.body;
  const newNote = {
    title,
    text,
  };

  readAndAppend(newNote, "./db/db.json");
});

module.exports = router;
