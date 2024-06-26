import MessageCont from "../components/messageContent/messagecontanior";
import Sidebar from "../components/sidebar/sidebar";
import useConversation from "../zustand/useConversation";
import { IoMenu } from "react-icons/io5";

export default function Home() {
  const { isSidebarOpen, setIsSidebarOpen } = useConversation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log(isSidebarOpen);

  return (
    <div className="flex relative items-center justify-center w-[270px] h-[450px] sm:h-[440px] md:h-[550px] sm:w-fit">
      <div
        className={`absolute ${
          isSidebarOpen ? "bottom-0" : "top-0"
        }  md:hidden right-0 p-2 rounded-lg bg-red-500 text-red-800 z-50 cursor-pointer`}
        onClick={toggleSidebar}
      >
        <IoMenu className="h-6 w-6" />
      </div>
      <div
        className={`lg:flex ${
          isSidebarOpen ? "block" : "hidden"
        } h-full lg:block`}
      >
        <Sidebar />
      </div>
      <MessageCont />
    </div>
  );
}
