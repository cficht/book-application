const { Router } = require('express');
const Author = require('../models/Author');

module.exports = Router()
  .post('/', (req, res, next) => {
    Author
      .create(req.body)
      .then(author => res.send(author))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Author
      .findById(req.params.id)
      .populate('books')
      .then(author => res.send(author))
      .catch(next);
  });
