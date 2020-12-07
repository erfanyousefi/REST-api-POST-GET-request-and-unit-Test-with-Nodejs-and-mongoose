const mongoose = require("mongoose");
const TodoModel = mongoose.model("todo", {
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 2
    },
    body: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    completed : {
        type:Boolean,
        default : false
    }
});
module.exports = {TodoModel}