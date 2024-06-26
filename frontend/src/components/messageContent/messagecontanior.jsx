import MessageInput from "./messageinput";
import Messages from "./messages";
import useConversation from "../../zustand/useConversation.jsx";
import NoChatSelected from "./nochatselected.jsx";
import { useEffect } from "react";
import { useAuthContext } from "../../context/authcontect.jsx";

export default function MessageCont() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  const { authUser } = useAuthContext();
  console.log(authUser);

  return (
    <div className=" w-[270px] md:min-w-[450px] h-full z-0 md:z-20">
      {selectedConversation ? (
        <div className="relative h-full w-[270px] md:min-w-[450px] flex m-0 md:ml-2 border-none md:border-l-2 p-0 md:pl-2 flex-col ">
          <div className="absolute top-0 w-[270px] md:min-w-[450px]  bg-white p-2 shadow">
            {selectedConversation.fullname}
          </div>
          <div className="flex-1 overflow-auto mt-12 mb-12">
            <Messages />
          </div>
          <div className="absolute bottom-0 w-full">
            <MessageInput />
          </div>
        </div>
      ) : (
        <NoChatSelected user={authUser} />
      )}
    </div>
  );
}
