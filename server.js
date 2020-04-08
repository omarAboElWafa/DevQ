//import express
const express = require("express");

//intialize app variable
const app = express();
app.get("/", (req, res) => res.send("API Running"));

//this will look for environment variable wehn deployment to Heroku
const PORT = process.env.PORT || 500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
