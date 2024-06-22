import { LuSendHorizonal } from "react-icons/lu";

export default function MessageInput() {
  return (
    <form action="" className=" flex">
      <div className="w-full flex">
        <input
          type="text"
          placeholder="Enter The Message Here"
          className="input input-bordered w-full "
        />
        <button className=" p-2">
          <LuSendHorizonal className=" h-6 w-6" />
        </button>
      </div>
    </form>
  );
}
