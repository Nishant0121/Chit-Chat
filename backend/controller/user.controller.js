import User from "../model/user.model.js";

export const getUserForsideBar = async (req, res) => {
  try {
    const logedInuserId = req.user._id;

    const filteredusers = await User.find({
      _id: { $ne: logedInuserId },
    }).select("-password");
    res.status(200).json({ users: filteredusers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
