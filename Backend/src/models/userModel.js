const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username:        { type: String, required: true },
    email:           { type: String, required: true, unique: true },
    password:        { type: String, required: true },
    name:            { type: String },
    bio:             { type: String },
    profilePhoto:    { type: String },
    followersCount:  { type: Number, default: 0 },
    followingCount:  { type: Number, default: 0 },
    postCount:       { type: Number, default: 0 },
    createdAt:       { type: Date, required: true, default: Date.now }
  },
  { versionKey: false, timestamps: false }
);

module.exports = mongoose.model("User", userSchema, "user");
