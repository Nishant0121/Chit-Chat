import mongoose from "mongoose";

import { Schema } from "mongoose";

const messageschemas = new Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    reciverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    message: { type: String, require: true },
  },
  { timestamp: true }
);

const Message = mongoose.model("Message", messageschemas);

export default Message;
