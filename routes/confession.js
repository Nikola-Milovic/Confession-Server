const { Confession, validate } = require('../models/confession');
const confessionController = require("../controllers/confession.controller")
const express = require('express');
const logger = require('../logging/logger')
const router = express.Router();

router.get('/', async (req, res) => {
  const confessionList = await confessionController.getConfessionList(req.query.sort)
  res.send(confessionList);
});

router.post('/', async (req, res) => {
  const { error } = validate({ text: req.body.text });
  if (error) {
    logger.error("error validating is " + error.details[0].message)
    res.status(400).send(error.details[0].message);
    return
  }
  conf = new Confession({ text: req.body.text });
  await conf.save(function (err, c) {
    if (err) {
      logger.error("error saving is " + err)
      res.status(500).send(err);
      return
    }
    logger.info("Succesfully saved")
    res.send({ status: '200', id: c.id })
  });
});

module.exports = router; 
