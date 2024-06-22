import SearchInput from "./searchinput";
import UserConversation from "./usersconver";
import { CiLogout } from "react-icons/ci";

export default function Sidebar() {
  return (
    <div className=" relative h-full w-full flex flex-col items-start justify-start">
      <SearchInput />
      <div className="divider px-3"></div>
      <UserConversation />
      <div className=" bg-slate-600 w-full p-2 rounded-lg absolute bottom-0 flex items-center">
        <CiLogout className="h-6 w-6 font-bold text-white" />
        <h1 className="ml-2 text-white ">Logout</h1>
      </div>
    </div>
  );
}
