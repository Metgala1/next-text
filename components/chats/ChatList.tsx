import ChatItem from "./ChatItems";
import ChatSearch from "./ChatSearch";

export default function ChatList() {
  return (
    <section className="w-[380] border-r border-zinc-800 bg-zinc-900">
      <div className="p-4">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Chats
        </h1>

        <ChatSearch />
      </div>

      <div className="px-2">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </section>
  );
}