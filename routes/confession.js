const { Confession, validate } = require('../models/confession');
const express = require('express');
const winston = require('winston');
const router = express.Router();

router.get('/', async (req, res) => {
  const confessions = ["Hello", "Hello2"]
  res.send(confessions);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  conf = new Confession({ text: req.body.text });
  await conf.save(function (err) {
    if (err) return winston.error("Error saving confession", err);
    winston.info("Succesfully saved")
    res.send("Success")
  });
});

module.exports = router; 
