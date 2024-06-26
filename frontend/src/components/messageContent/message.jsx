import { useAuthContext } from "../../context/authcontect";
import { extractTime } from "../../utils/time";
import useConversation from "../../zustand/useConversation";

export default function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === selectedConversation._id;
  const time = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat chat-start" : "chat chat-end";
  const profilePic = fromMe
    ? selectedConversation?.profilePic
    : authUser.profilePic;

  const bgColor = fromMe ? " bg-blue-500" : "bg-slate-600";
  const name = fromMe ? selectedConversation?.fullname : "You";
  return (
    <div className="w-full">
      <div className={` ${chatClassName}`}>
        <div className="chat-image avatar">
          {fromMe ? (
            <div className="w-10 rounded-full ">
              <img alt="Tailwind CSS chat bubble component" src={profilePic} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="chat-header">{name}</div>
        <div className={`chat-bubble min-w-fit max-w-[250px] ${bgColor}`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50">
          <span>
            <time className="text-xs">{time}</time>
          </span>
        </div>
      </div>
    </div>
  );
}
