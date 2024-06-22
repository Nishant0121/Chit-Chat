import mongoose from "mongoose";

import { Schema } from "mongoose";

const userschema = new Schema({
  fullname: { type: String, require: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true, minlength: 6 },
  gender: { type: String, require: true, enum: ["male", "female"] },
  profilePic: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", userschema);
export default User;
