import Message from "./message";
import NoChatSelected from "./nochatselected";

export default function Messages() {
  const chatselected = true;

  return (
    <div className="h-full">
      {chatselected ? (
        <div className="flex flex-col items-start justify-start h-full overflow-auto">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
}
