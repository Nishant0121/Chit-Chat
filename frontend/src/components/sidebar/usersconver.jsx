import useGetConversation from "../../hook/useGetConversation";
import Loader from "../loder/loder";
import UserConvo from "./user";

export default function UserConversation() {
  const { loading, conversations } = useGetConversation();
  const users = conversations?.users || []; // Safely accessing users array

  return (
    <div className="w-full flex flex-col justify-start items-center overflow-auto">
      {users.map((user, idx) => (
        <UserConvo
          key={user._id}
          user={user}
          lastIdx={idx === users.length - 1}
        />
      ))}

      {loading ? <Loader /> : ""}
    </div>
  );
}
