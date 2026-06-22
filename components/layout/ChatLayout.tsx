import Sidebar from "../sidebar/Sidebar";
import ChatList from "../chats/ChatList";
import ChatHeader from "../conversation/ChatHeader";
import MessageList from "../conversation/MessageList";
import MessageInput from "../conversation/MessageInput";

export default function ChatLayout() {
  return (
    <main className="flex h-screen bg-black">
      <Sidebar />

      <ChatList />

      <section className="flex flex-1 flex-col">
        <ChatHeader />
        <MessageList />
        <MessageInput />
      </section>
    </main>
  );
}