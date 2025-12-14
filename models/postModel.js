var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/");

const likesSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const postSchema = new mongoose.Schema({
  caption: String,
  image: String,
  likes: [likesSchema],
  uploadedBy: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", postSchema);