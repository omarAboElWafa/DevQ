//bringing needed packages to connect to Database
const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    //await as "mongoose.connect return promise"
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);

    //Exist process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
