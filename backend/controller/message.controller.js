import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";

export const SendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: reciverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participents: { $all: [senderId, reciverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participents: [senderId, reciverId],
      });
    }

    const newMessage = new Message({
      senderId,
      reciverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await conversation.save();
    await newMessage.save();

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participents: { $all: [senderId, userToChatId] },
    }).populate("messages");

    res.status(200).json(conversation.messages);
  } catch (error) {}
};
