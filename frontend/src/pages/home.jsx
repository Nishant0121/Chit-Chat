import MessageCont from "../components/messageContent/messagecontanior";
import Sidebar from "../components/sidebar/sidebar";
import { useSocketContext } from "../context/socketcontext";
import useConversation from "../zustand/useConversation";
import { IoMenu } from "react-icons/io5";

export default function Home() {
  const { isSidebarOpen, setIsSidebarOpen } = useConversation();
  const { onlineUsers } = useSocketContext();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log(onlineUsers);
  console.log(isSidebarOpen);

  return (
    <div className="flex relative items-center justify-center w-[300px] h-[570px] sm:w-[400px] sm:h-[590px] md:h-[600px] md:w-fit  ">
      <div
        className={`absolute ${
          isSidebarOpen ? "bottom-0" : "top-0"
        }  md:hidden right-0 p-1.5 rounded-lg bg-transparent border-rose-50 border text-white z-50 cursor-pointer`}
        onClick={toggleSidebar}
      >
        <IoMenu className="h-6 w-6" />
      </div>
      <div
        className={`lg:flex ${
          isSidebarOpen ? "block" : "hidden"
        } h-full items-center justify-center lg:block`}
      >
        <Sidebar />
      </div>
      <MessageCont />
    </div>
  );
}
