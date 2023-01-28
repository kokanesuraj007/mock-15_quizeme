const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose
mongoose.set('strictQuery', false)
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to db"))
  .catch(() => console.log("error"));

module.exports = connection;