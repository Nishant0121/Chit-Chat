import useGetSidebar from "../../hook/useGetSidebar.js";
import useConversation from "../../zustand/useConversation.jsx";

export default function UserConvo({ user, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { toggleSidebar } = useGetSidebar();
  const isSelected = selectedConversation?._id === user._id;

  const handleClick = () => {
    setSelectedConversation(user);
    if (window.innerWidth < 786) {
      toggleSidebar();
    }
  };

  return (
    <div className="w-full">
      <div
        className={`flex items-center rounded-lg justify-start w-full ${
          isSelected ? "bg-blue-400 shadow-sm" : "bg-transparent"
        }`}
        onClick={handleClick}
      >
        <img src={user.profilePic} className="h-10 w-10 m-2" alt="" />
        <h1 className="text-lg text-blue-100">{user.fullname}</h1>
      </div>
      {!lastIdx && <div className="divider px-3 m-0"></div>}
    </div>
  );
}
