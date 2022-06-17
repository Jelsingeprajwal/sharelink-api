require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  //DataBase connection
  mongoose.connect(process.env.MONGO_CONNECTION_URL);
  const connection = mongoose.connection;
  //gets executed once database is connected
  connection.once("open", () => {
    console.log("Database connected 🥳🥳🥳🥳");
  });
}
module.exports = connectDB;