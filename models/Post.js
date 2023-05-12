const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {              //maybe change this to parkName later
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  speaking: {
    type: String,
    require: true,
  },
  mainTerrain: {
    type: String,
    require: true,
  },
  videoUrl: {
    type: String,
    require: true,
  },
  videoUrlFullScreen: {
    type: String,
    require: true,
  },
  youTubeUser: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    required: true,
  },
  bookmarks: {
    type: Array,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdBy: {
    type: String,
    ref: "User",
  },
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);