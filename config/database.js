const mongoose = require("mongoose");
const dontEnv = require("dotenv");

dontEnv.config();

const mongoConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};



module.exports = mongoConnection;