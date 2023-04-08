const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    birthYear: Number,
    deathYear: Number
});

module.exports = AuthorSchema;