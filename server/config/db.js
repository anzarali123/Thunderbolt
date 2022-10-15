const mongooes = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongooes.connect(process.env.MONGO_URI);
    console.log("database connected", conn.connection.host);
  } catch (error) {
    console.log(`could not connected to the database ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
