const mongoose = require("mongoose")
const blogMode = mongoose.model("blog", ({
    title: { type: String, requited: true },
    text: { type: String, required: true }
}, {
    timestamps: true
}));
module.exports = blogModel