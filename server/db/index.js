const mongoose = require("mongoose");

mongoose
  .connect("mongoDB_URI_connection_string", { useNewUrlParser: true })
  .then(console.log("\x1b[35m", "This is connected to MongoDB"))
  .catch(e => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
