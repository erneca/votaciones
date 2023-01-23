const mongoose = require("mongoose");

const connectMongo = async () => {};

const disconnectMongo = async () => {
  mongoose.connection.close();
};

module.exports = {
  connectMongo,
  disconnectMongo,
};
