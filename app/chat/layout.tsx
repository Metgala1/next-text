import Sidebar from "@/components/sidebar/Sidebar";
import ChatList from "@/components/chats/ChatList";
import ChatHeader from "@/components/conversation/ChatHeader";
import MessageInput from "@/components/conversation/MessageInput";
import MessageList from "@/components/conversation/MessageList";

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