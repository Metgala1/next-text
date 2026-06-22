import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

export default function Conversation() {
  return (
    <section className="flex flex-1 flex-col">
      <ChatHeader />

      

      <MessageInput />
    </section>
  );
}