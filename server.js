//import dependencies
const express = require("express");
const connectDB = require("./config/db");

//intialize app variable
const app = express();

//connect Database
connectDB();

//app.get("/", (req, res) => res.send("API Running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
//this will look for environment variable wehn deployment to Heroku

const PORT = process.env.PORT || 500;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
