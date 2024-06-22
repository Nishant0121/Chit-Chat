import MessageInput from "./messageinput";
import Messages from "./messages";

export default function MessageCont() {
  return (
    <div className="relative h-full flex ml-2 border-l-2 pl-2 flex-col md:min-w-[450px]">
      <div className="absolute top-0 w-full bg-white p-2 shadow">Name</div>
      <div className="flex-1 overflow-auto mt-12 mb-12">
        <Messages />
      </div>
      <div className="absolute bottom-0 w-full">
        <MessageInput />
      </div>
    </div>
  );
}
