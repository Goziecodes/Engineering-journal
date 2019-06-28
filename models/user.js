var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    Username: {type: String, unique: true},
    email: { type: String, unique: true},
    password: String,
    role: Boolean
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);