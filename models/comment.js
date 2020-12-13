const Joi = require('joi');
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
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
  },
  confessionID: {
    type: String, required: true
  }
});

const Comment = mongoose.model('Comment', commentSchema);

function validateComment(comment) {
  const schema = Joi.object({
    text: Joi.string()
      .min(20)
      .max(4000)
      .required()
  })

  return schema.validate(comment)
}

exports.Comment = Comment;
exports.validate = validateComment;