const { Comment, validate } = require('../models/comment');
const express = require('express');
const logger = require('../logging/logger')
const router = express.Router();

router.get('/', async (req, res) => {
  const comments = await Comment.find({ confessionID: req.query.id })
  res.send(comments)
});

router.post('/', async (req, res) => {
  const { error } = validate({ text: req.body.text });
  if (error) {
    logger.error("error validating is " + error.details[0].message)
    res.sendStatus(400);
    return
  }
  conf = new Comment({ text: req.body.text, confessionID: req.query.id });
  await conf.save(function (err, c) {
    if (err) {
      logger.error("error saving is " + err)
      res.status(500).send(err);
      return
    }
    logger.info("Succesfully saved")
    res.sendStatus(200)
  });
});

module.exports = router; 
