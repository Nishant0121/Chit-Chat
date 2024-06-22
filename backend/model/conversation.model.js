import mongoose from "mongoose";

import { Schema } from "mongoose";

const conversationSchema = new Schema(
  {
    participents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    messages: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Message", default: [] },
    ],
  },
  { timestamp: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
