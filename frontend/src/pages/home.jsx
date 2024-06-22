import MessageCont from "../components/messageContent/messagecontanior";
import Sidebar from "../components/sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex items-center justify-center sm:h-[440px] md:h-[550px]">
      <Sidebar />
      <MessageCont />
    </div>
  );
}
