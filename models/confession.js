const Joi = require('joi');
const mongoose = require('mongoose');

const confessionShema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 4000
  },
  date: {
    type: Date, default: Date.now
  },
  likes: {
    type: Number, default: 0
  },
  dislikes: {
    type: Number, default: 0
  }
});

const Confession = mongoose.model('Confession', confessionShema);

function validateConfession(confession) {
  const schema = Joi.object({
    text: Joi.string()
      .min(20)
      .max(4000)
      .required()
  })

  return schema.validate(confession)
}

exports.Confession = Confession;
exports.validate = validateConfession;