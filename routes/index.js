var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');

/**
 * @swagger
 * /api/loadBooks:
 *  get:
 *   description: Use to request books from the external API
 *   produces:
 *    - application/json
 *   responses:
 *    200:
 *     description: A successful response
 * 
 */
router.get('/loadBooks', function(req, res, next) {
  indexController.loadBooks();
  res.sendStatus(200);
});

/**
 * @swagger
 * /api/books:
 *  get:
 *   description: Use to request all books from the database
 *   produces:
 *    - application/json
 *   responses:
 *    200:
 *     description: A successful response
 *     schema:
 *     type: array
 */
router.get('/books', function(req, res, next) {
  indexController.getBooks(req, res);
});

/**
 * @swagger
 * /api/books/{id}:
 *  get:
 *   description: Use to request a book from the database by id
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      description: The book id
 *   required: true
 *   responses:
 *    200:
 *     description: A successful response
 *     schema:
 *     type: object
 */
router.get('/books/:id', function(req, res, next) {
  indexController.getBook(req, res);
});

router.get('/books/:id/formats', function(req, res, next) {
  indexController.getBookFormats(req, res);
});

router.put('/books/:id', function(req, res, next) {
  indexController.updateBook(req, res);
});

router.delete('/books/:id', function(req, res, next) {
  indexController.deleteBook(req, res);
});

/**
 * @swagger
 * /api/books:
 *  post:
 *   description: Use to create a new book
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: body
 *      name: Book
 *      schema:
 *      type: object
 *   responses:
 *    201: 
 *     description: Book created successfully!
 */
router.post('/books', function(req, res, next) {
  indexController.createBook(req, res);
});


module.exports = router;
