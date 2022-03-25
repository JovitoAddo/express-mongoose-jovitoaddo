const mongoose = require("mongoose");

const url = "mongodb+srv://jovitoaddo:jovitoaddopassword@cluster0.kwuy5.mongodb.net/bootcamp";

const db = mongoose.connect(url)

module.exports = db