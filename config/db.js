const mongoose = require("mongoose");

const url = "mongodb+srv://jovitoaddo:jovitoaddopassword@cluster0.kwuy5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const db = mongoose.connect(url)

module.exports = db