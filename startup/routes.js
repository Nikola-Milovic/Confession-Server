const express = require('express');
const confession = require('../routes/confession');
const error = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/confession', confession);
  app.use(error);
}