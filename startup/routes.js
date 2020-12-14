const express = require('express');
const confession = require('../routes/confessions');
const comment = require('../routes/comments');
const error = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/confessions', confession);
  app.use('/api/comments', comment);
  app.use(error);
}