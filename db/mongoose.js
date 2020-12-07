const mongoose = require("mongoose");
const {
    DB_NAME,
    DB_PORT,
    DB_URL
} = require("./../config/config");
mongoose.Promise = global.Promise;
mongoose.connect(`${DB_URL}:${DB_PORT}/${DB_NAME}`, (err) => {
    if (err) {
        console.log("Unable Connecting to DataBase", err);
    } else {
        console.log("Connecting to Database doed be successfly...");
    }
});
module.exports = mongoose;