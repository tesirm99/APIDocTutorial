const mongoose = require('../db/dbConfig');
const Schema = mongoose.Schema;
const AuthorSchema = require('./author');

const BookSchema = new Schema({
    title: String,
    authors: [AuthorSchema],
    subjects: [String],
    languages: [String],
    copyright: Boolean,
    mediaType: String,
    downloads: Number,
    formats: {}
});

module.exports = mongoose.model('Book', BookSchema);