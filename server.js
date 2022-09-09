// call in dependencies
const express = require("express");
const path = require("path");
const router = require("./routes/api");

// setup asynchronous processes?
// setup server
const app = express();
const PORT = process.env.PORT || 3006;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", router);
app.use(express.static("./public"));

// setup GET Request - notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

// setup GET Request - index.html
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);



// setup POST Request - API/Notes - new note to save on the request body
// setup DELETE Request *BONUS*

// listening for port
app.listen(PORT, () =>
  console.log(`Note-Taker app listening at http://localhost:${PORT}`)
);
