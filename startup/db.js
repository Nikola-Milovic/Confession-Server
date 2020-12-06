const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function () {
  mongoose.connect('mongodb://localhost/confession', { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) {
      winston.error('Failed to connect to MongoDB...', err)
    }
    else {
      winston.info('Connected to MongoDB...')
    }
  });
}