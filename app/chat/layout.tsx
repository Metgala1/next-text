import Sidebar from "@/components/sidebar/Sidebar";
import ChatList from "@/components/chats/ChatList";
import Conversation from "@/components/conversation/ConversationArea";
export default function ChatLayout() {
  return (
    <main className="flex h-screen bg-zinc-950 text-white">
      <Sidebar />
      <ChatList />
      <Conversation />
    </main>
  );
}