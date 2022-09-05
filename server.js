// call in dependencies
const express = require("express");
const path = require("path");
// setup asynchronous processes?
// setup server
const app = express();
const PORT = 3006;
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api", api);
app.use(express.static("./develop/public"));

// setup GET Request - notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
);
// setup GET Request - index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
);
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
);
// setup GET Request - API/Notes

// setup POST Request - API/Notes - new note to save on the request body
// setup DELETE Request *BONUS*
// setup HTML routes for both  index and notes files
// listening for port
app.listen(PORT, () =>
  console.log(`Note-Taker app listening at http://localhost:${PORT}`)
);
